import { numberToMonth } from "./month.js";
import { photos, Photo } from "./photos.js";

const monthInput: any = document.getElementById("month-input");
const monthName: any = document.getElementById("month-name");
const photo: any = document.getElementById("photo");
const photoYear: any = document.getElementById("photo-year");
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