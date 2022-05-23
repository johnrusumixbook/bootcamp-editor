import { logError } from "../core/customLogger"

//helps to convert distance from pizels to actual svg distance
export const mapPixelsToSvgCoordinate = (
    svgPixelSize:number, 
    svgViewportSize:number, 
    value:number) 
    : number =>{
    try{
        return svgViewportSize*value/svgPixelSize;
    }
    catch(e){
        logError(e);
        return value;
    }
}