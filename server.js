
const express = require('express');
const app = express();
const port = 4000;
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.js');
let data = [];

try {
  const dataContent = fs.readFileSync(dataFilePath, 'utf8');
  data = eval(dataContent); 
} catch (err) {
  console.error('Error loading data from data.js:', err);
  data = [];
}

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//multer for images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/posters/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });
// ger the data in data.js
app.get('/movies', (req, res) => {
  res.json(data);
});

//post the data/ save new data 
app.post('/movies', upload.single('poster'), (req, res) => {
  try {
    const { title, type, rating, comment } = req.body;
    const poster = req.file ? req.file.filename : null;

  
    if (!title || !type || !rating || !comment) {
      return res.status(400).json({ error: 'Missing required fields: title, type, rating, or comment' });
    }
    const id = data.length + 1;

    data.push({ id, title, type, rating, comment, poster });

    fs.writeFileSync(dataFilePath, `module.exports = ${JSON.stringify(data, null, 2)};`, 'utf8');

    res.status(201).json({ id, title, type, rating, comment, poster });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// delete data by id
app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  data.splice(index, 1);

  fs.writeFileSync(dataFilePath, `module.exports = ${JSON.stringify(data, null, 2)};`, 'utf8');

  res.status(200).json({ message: 'Movie deleted successfully' });
});

// start the server at the port locally
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});