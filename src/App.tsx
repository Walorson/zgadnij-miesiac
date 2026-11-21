import './css/main.css'
import { Photo } from './assets/Photo'
import SeasonSlider from './assets/SeasonSlider';
import { useEffect, useState } from 'react';
import ButtonCheckAnswer from './assets/ButtonCheckAnswer';

function App() {
  
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [endRound, setEndRound] = useState<boolean>(false);
  const [photo, setPhoto] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:3000/api/photos/random")
      .then(response => {
        if(!response.ok) {
          throw new Error("Nie udało się pobrać zdjęcia");
        }
        return response.json();
      })
      .then(data => setPhoto(data))
      .catch(console.error)
  }, []);

  if (!photo) {
      return <p>Ładowanie zdjęcia...</p>;
  }

  return (
    <>
      <div id="title">ZGADNIJ MIESIĄC</div>
      <Photo photo={photo} />
      <SeasonSlider endRound={endRound}/>
      <ButtonCheckAnswer photo={photo} isCorrect={isCorrect} setIsCorrect={setIsCorrect} endRound={endRound} setEndRound={setEndRound}/>
    </>
  )
}

export default App;
