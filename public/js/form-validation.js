// this function validate the post format and send it to the server

document.getElementById('add-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const type = document.getElementById('type').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const posterInput = document.getElementById('poster');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('rating', rating);
    formData.append('comment', comment);
    if (posterInput.files.length > 0) {
      formData.append('poster', posterInput.files[0]);
    }

    fetch('/movies', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.reload();
    })
    .catch(error => console.error('Error:', error));
  });