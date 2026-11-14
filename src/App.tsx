import './css/main.css'
import { Photo } from './assets/Photo'
import { randomizePhotos } from './random'
import SeasonSlider from './assets/SeasonSlider';
import { useState } from 'react';
import ButtonCheckAnswer from './assets/ButtonCheckAnswer';

function App() {
  
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [endRound, setEndRound] = useState<boolean>(false);
  const [photos, setPhotos] = useState(randomizePhotos());

  return (
    <>
      <div id="title">ZGADNIJ MIESIĄC</div>
      <Photo photo={photos[0]} />
      <SeasonSlider endRound={endRound}/>
      <ButtonCheckAnswer photo={photos[0]} isCorrect={isCorrect} setIsCorrect={setIsCorrect} endRound={endRound} setEndRound={setEndRound}/>
    </>
  )
}

export default App
