import { numberToMonth2 } from "../month"
import { Photo } from "../photos"

export const CorrectAnswer = ({photo} : { photo: Photo }) => {
    return (
        <div className="correctAnswer">
            <p>Pawidłowa odpowiedź!</p>
            <p>Zdjęcie zostało wykonane: {photo.day} <b>{numberToMonth2(photo.monthNumber)}</b> {photo.year}</p>
        </div>
    )
}