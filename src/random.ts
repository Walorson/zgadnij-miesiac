import { photos, Photo } from "./photos";

const ROUND_COUNT: number = 5;

export function randomizePhotos(): Photo[]
{
    const drawnNumbers: number[] = [];
    const drawnPhotos: Photo[] = [];
    let drawnCount: number = 0;

    while(drawnCount < ROUND_COUNT)
    {
        const rand: number = Math.floor(Math.random()*photos.length);
        
        if(drawnNumbers.includes(rand) == false) 
        {
            drawnPhotos.push(photos[rand]);
            drawnCount++;
        }

        drawnNumbers.push(rand);
    }

    return drawnPhotos;
}