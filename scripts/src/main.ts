import { numberToMonth } from "./month.js";
import { photos, Photo } from "./photos.js";

const monthInput: any = document.getElementById("month-input");
const monthName: HTMLElement = document.getElementById("month-name");
const photo: any = document.getElementById("photo");
const photoYear: any = document.getElementById("photo-year");
const confirmBtn: any = document.getElementById("confirm-button");
let photoInfo: Photo;

monthInput.addEventListener("input", () => 
{
    monthName.textContent = numberToMonth(Number(monthInput.value));
});

window.addEventListener("load", () => {
    const rand: number = Math.floor(Math.random() * photos.length);

    photoInfo = photos[rand];
    photo.setAttribute("src", "img/" + photoInfo.url);
    photoYear.textContent = photoInfo.year;
})

confirmBtn.addEventListener("click", () => {
    if(monthInput.value == photoInfo.monthNumber) {
        alert("Zgadłeś!")
    }
    else {
        alert("Nie zgadłeś!!!");
    }
});