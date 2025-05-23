import { useState } from 'react'
import './css/main.css'
import './css/App.css'
import { Photo } from './assets/Photo'
import { randomizePhotos } from './random'

function App() {
  
  const photos: any[] = randomizePhotos();
  console.log(photos)

  return (
    <>
      <div id="title">ZGADNIJ MIESIĄC</div>
      <Photo photo={photos[0]}></Photo>
    </>
  )
}

export default App
