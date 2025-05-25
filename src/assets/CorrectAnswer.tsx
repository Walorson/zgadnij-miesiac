import { numberToMonth2 } from "../month"

export const CorrectAnswer = (props: any) => {
    return (
        <div className="correctAnswer">
            <p>Pawidłowa odpowiedź!</p>
            <p>Zdjęcie zostało wykonane: {props.photo.day} <b>{numberToMonth2(props.photo.monthNumber)}</b> {props.photo.year}</p>
        </div>
    )
}