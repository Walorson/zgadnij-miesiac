import { numberToMonth2 } from "../month"

export const WrongAnswer = (props: any) => {
    return (
        <div className="wrongAnswer">
            <p>Niepoprawna odpowiedź.</p>
            <p>Zdjęcie zostało wykonane: {props.photo.day} <b>{numberToMonth2(props.photo.monthNumber)}</b> {props.photo.year}</p>
        </div>
    )
}