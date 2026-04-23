import { numberToMonth } from "./month.js";
import { photos, Photo } from "./photos.js";

const monthInput: HTMLInputElement = document.getElementById("month-input")! as HTMLInputElement;
const monthName: HTMLElement = document.getElementById("month-name")!;
const photo: HTMLElement = document.getElementById("photo")!;
const photoYear: HTMLElement = document.getElementById("photo-year")!;
let photoInfo: Photo;

monthInput.addEventListener("input", () => 
{
    monthName.textContent = numberToMonth(Number(monthInput.value));
});

window.addEventListener("load", () => {
    const rand: number = Math.floor(Math.random() * photos.length);

    photoInfo = photos[rand];
    photo.setAttribute("src", "img/" + photoInfo.url);
    photoYear.textContent = String(photoInfo.year);
})