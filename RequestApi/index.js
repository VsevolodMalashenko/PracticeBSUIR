function fetchImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'success') {
        const imageUrl = data.message
        document.getElementById('image').src = imageUrl
      } else {
        console.error('Failed to fetch image')
      }
    })
    .catch((error) => console.error('Error:', error))
}

const container = document
  .getElementById('App')
  .addEventListener('click', fetchImage)
