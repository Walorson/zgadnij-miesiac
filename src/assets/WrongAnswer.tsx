import { numberToMonth2 } from "../month"
import { Photo } from "../photos"

export const WrongAnswer = ({photo} : {photo: Photo}) => {
    return (
        <div className="wrongAnswer">
            <p>Niepoprawna odpowiedź.</p>
            <p>Zdjęcie zostało wykonane: {photo.day} <b>{numberToMonth2(photo.monthNumber)}</b> {photo.year}</p>
        </div>
    )
}