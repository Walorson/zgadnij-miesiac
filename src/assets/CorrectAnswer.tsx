import { numberToMonth } from "../month"

export const CorrectAnswer = (props: any) => {
    return (
        <div className="correctAnswer">
            <p>Pawidłowa odpowiedź!</p>
            <p>Zdjęcie zostało wykonane w <b>{numberToMonth(props.photo.monthNumber)}</b> {props.photo.year}</p>
        </div>
    )
}