import './css/main.css'
import './css/App.css'
import { Photo } from './assets/Photo'
import { randomizePhotos } from './random'

function App() {
  
  const photos: any[] = randomizePhotos();

  return (
    <>
      <div id="title">ZGADNIJ MIESIĄC</div>
      <Photo photo={photos[0]}></Photo>
    </>
  )
}

export default App
