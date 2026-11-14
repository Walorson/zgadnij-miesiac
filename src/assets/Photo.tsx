import Magnifier from "./Magnifier";
import { useRef } from "react";
import "../css/Slider.css";

export const Photo = (props) => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    return (
        <div className="photo">
            <div id="photo">
                <Magnifier 
                    src={"./img/" + props.photo.url} 
                    imgRef={imgRef} 
                />
            </div>
        </div>
    )
}