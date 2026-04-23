type month = "Styczeń" | "Luty" | "Marzec" | "Kwiecień" | "Maj" | "Czerwiec" | "Lipiec" | "Sierpień" | "Wrzesień" | "Październik" | "Listopad" | "Grudzień";
type month2 = "Stycznia" | "Lutego" | "Marca" | "Kwietnia" | "Maja" | "Czerwca" | "Lipca" | "Sierpnia" | "Września" | "Października" | "Listopada" | "Grudnia";

export function numberToMonth(num: number): month
{
    switch(num) 
    {
        default: return "Styczeń";
        case 2: return "Luty";
        case 3: return "Marzec";
        case 4: return "Kwiecień";
        case 5: return "Maj";
        case 6: return "Czerwiec";
        case 7: return "Lipiec";
        case 8: return "Sierpień";
        case 9: return "Wrzesień";
        case 10: return "Październik";
        case 11: return "Listopad";
        case 12: return "Grudzień";
    }
}

export function numberToMonth2(num: number): month2
{
    switch(num) 
    {
        default: return "Stycznia";
        case 2: return "Lutego";
        case 3: return "Marca";
        case 4: return "Kwietnia";
        case 5: return "Maja";
        case 6: return "Czerwca";
        case 7: return "Lipca";
        case 8: return "Sierpnia";
        case 9: return "Września";
        case 10: return "Października";
        case 11: return "Listopada";
        case 12: return "Grudnia";
    }
}
