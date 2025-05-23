import { numberToMonth } from "../month"

export const WrongAnswer = (props: any) => {
    return (
        <div className="wrongAnswer">
            <p>Niepoprawna odpowiedź.</p>
            <p>Zdjęcie zostało wykonane w <b>{numberToMonth(props.photo.monthNumber)}</b> {props.photo.year}</p>
        </div>
    )
}