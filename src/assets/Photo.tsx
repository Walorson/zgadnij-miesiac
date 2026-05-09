import { useEffect, useState } from "react";
import { numberToMonth } from "../month";
import { CorrectAnswer } from "./CorrectAnswer";
import { WrongAnswer } from "./WrongAnswer";

export const Photo = (props) => {
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [endRound, setEndRound] = useState<boolean>(false);

    function updateMonthName(e: React.FormEvent<HTMLInputElement>): void
    {
        document.getElementById("month-name")!.textContent = numberToMonth(Number(e.currentTarget.value))!;   
    }

    function checkAnswer(): void
    {
        const monthNumber: number = Number((document.getElementById("month-input") as HTMLInputElement).value);
        if(monthNumber == props.photo.monthNumber) {
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
        <div className="photo">
            <div id="photo">
                <img src={"./img/"+props.photo.url} />
            </div>
            <input type="range" min="1"  max="12" id="month-input" defaultValue="6" onInput={(e) => updateMonthName(e)} disabled={endRound ? true : false}/>
            <div id="month-name">Czerwiec</div>
            <button onClick={endRound ? () => location.reload() : () => checkAnswer()}>{endRound == false ? "Zatwierdź" : <i>Kolejne Zdjęcie</i>}</button>
            { isCorrect == true ? 
            <CorrectAnswer photo={props.photo}></CorrectAnswer> : 
            isCorrect == false ? 
            <WrongAnswer photo={props.photo}></WrongAnswer> : 
            null}
        </div>
    )
}