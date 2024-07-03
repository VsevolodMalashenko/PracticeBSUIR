const { useState } = React

function App() {
  const [imageSrc, setImageSrc] = useState('')

  const fetchImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setImageSrc(data.message)
        } else {
          console.error('Failed to fetch image')
        }
      })
      .catch((error) => console.error('Error:', error))
  }
  return (
      <div class="container">
        <button onClick={fetchImage}>Get image</button>
        {imageSrc && <img id="image" src={imageSrc} />}
      </div>
  )
}

const container = document.getElementById('App')
const root = ReactDOM.createRoot(container)
root.render(<App />)