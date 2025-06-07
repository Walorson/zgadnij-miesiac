import { useEffect, useState } from "react";
import { numberToMonth } from "../month";
import { CorrectAnswer } from "./CorrectAnswer";
import { WrongAnswer } from "./WrongAnswer";

export const Photo = (props: any) => {
    const [isCorrect, setIsCorrect] = useState<Boolean>(null);
    const [endRound, setEndRound] = useState<Boolean>(false);

    function updateMonthName(e: any): void
    {
        document.getElementById("month-name").textContent = numberToMonth(Number(e.target.value));   
    }

    function checkAnswer(): void
    {
        //@ts-ignore
        const monthNumber: number = document.getElementById("month-input").value;
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
                <div id="photo-year">{props.photo.year}</div>
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