import { DrawnShapeModel } from "./drawnShapeModel";

export class DrawnShapeResizeModel{
    shape: DrawnShapeModel;
    resizeXCoef:number;
    resizeYCoef:number;
    resizeWidthCoef:number;
    resizeHeightCoef:number;

    constructor(shape: DrawnShapeModel, resizeXCoef:number, resizeYCoef:number, resizeWidthCoef:number, resizeHeightCoef:number) {
       this.shape = shape;
        this.resizeXCoef = resizeXCoef;
        this.resizeYCoef = resizeYCoef;
        this.resizeWidthCoef = resizeWidthCoef;
        this.resizeHeightCoef = resizeHeightCoef;
    }
}