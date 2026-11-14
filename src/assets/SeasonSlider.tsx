import { numberToMonth } from "../month";

const SeasonSlider = ({endRound}) => {
    
    function updateMonthName(e: React.FormEvent<HTMLInputElement>): void
    {
        document.getElementById("month-name")!.textContent = numberToMonth(Number(e.currentTarget.value))!;   
    }

    return (
        <>
            <input type="range" min="1"  max="12" className="season-slider" id="month-input" defaultValue="6" onInput={(e) => updateMonthName(e)} disabled={endRound ? true : false}/>
            <div id="month-name">Czerwiec</div>
        </>
    )
}

export default SeasonSlider;