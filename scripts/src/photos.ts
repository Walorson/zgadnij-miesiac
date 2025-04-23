import { numberToMonth } from "./month.js";

export class Photo {
    url: string;
    year: number;
    monthNumber: number;

    constructor(url: string, year: number, monthNumber: number) {
        this.url = url;
        this.year = year;
        this.monthNumber = monthNumber;
    }
}

export const photos = [
    new Photo("1.jpg", 2014, 8),
    new Photo("2.jpg", 2014, 8),
    new Photo("3.jpg", 2016, 5),
    new Photo("4.jpg", 2016, 8),
    new Photo("5.jpg", 2022, 3)
]