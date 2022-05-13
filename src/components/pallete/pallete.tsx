import React from "react";
import './pallete.css'
const Pallete = () =>{
    return(
        <div className="palette">
            <div className="shape">
            <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <use xlinkHref="assets/shapes.svg#square" />
            </svg>
            </div>
            <div className="shape">
            <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="assets/shapes.svg#circle" />
            </svg>
            </div>
            <div className="shape">
            <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="assets/shapes.svg#triangle" />
            </svg>
            </div>
        </div>
    );
}

export default Pallete;