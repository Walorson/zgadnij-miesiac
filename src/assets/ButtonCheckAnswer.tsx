import { useEffect } from "react";
import { CorrectAnswer } from "./CorrectAnswer";
import { WrongAnswer } from "./WrongAnswer";

const ButtonCheckAnswer = ({photo, isCorrect, setIsCorrect, endRound, setEndRound}) => {

    function checkAnswer(): void
    {
        const monthNumber: number = Number((document.getElementById("month-input") as HTMLInputElement).value);
        if(monthNumber == photo.monthNumber) {
            setIsCorrect(true);
        }
        else {
            setIsCorrect(false);
        }

        setEndRound(true);
    }

    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, [isCorrect]);

    return (
        <>
            <button onClick={endRound ? () => location.reload() : () => checkAnswer()}>{endRound == false ? "Zatwierdź" : <i>Kolejne Zdjęcie</i>}</button>
            { isCorrect == true ? <CorrectAnswer photo={photo}></CorrectAnswer> : 
              isCorrect == false ? <WrongAnswer photo={photo}></WrongAnswer> : null}
        </>
    )
}

export default ButtonCheckAnswer;