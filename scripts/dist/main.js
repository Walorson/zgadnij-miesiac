import { numberToMonth } from "./month.js";
import { photos } from "./photos.js";
const monthInput = document.getElementById("month-input");
const monthName = document.getElementById("month-name");
const photo = document.getElementById("photo");
const photoYear = document.getElementById("photo-year");
const confirmBtn = document.getElementById("confirm-button");
let photoInfo;
monthInput.addEventListener("input", () => {
    monthName.textContent = numberToMonth(Number(monthInput.value));
});
window.addEventListener("load", () => {
    const rand = Math.floor(Math.random() * photos.length);
    photoInfo = photos[rand];
    photo.setAttribute("src", "img/" + photoInfo.url);
    photoYear.textContent = photoInfo.year;
});
confirmBtn.addEventListener("click", () => {
    if (monthInput.value == photoInfo.monthNumber) {
        alert("Zgadłeś!");
    }
    else {
        alert("Nie zgadłeś!!!");
    }
});
//# sourceMappingURL=main.js.map