const monthInput: any = document.getElementById("month-input");
const monthName: HTMLElement = document.getElementById("month-name");

monthInput.addEventListener("input", () => {
    let name: string;

    switch(monthInput.value) {
        case "1": name = "Styczeń"; break;
        case "2": name = "Luty"; break;
        case "3": name = "Marzec"; break;
        case "4": name = "Kwiecień"; break;
        case "5": name = "Maj"; break;
        case "6": name = "Czerwiec"; break;
        case "7": name = "Lipiec"; break;
        case "8": name = "Sierpień"; break;
        case "9": name = "Wrzesień"; break;
        case "10": name = "Październik"; break;
        case "11": name = "Listopad"; break;
        case "12": name = "Grudzień"; break;
    }

    monthName.textContent = name;
})