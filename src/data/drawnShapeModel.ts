import { ShapeTypeEnum } from "./shapeTypeEnum";

export class DrawnShapeModel{
    id: string;
    x: number;
    y: number;
    type: ShapeTypeEnum;
    width: number;
    height: number;

    constructor(id:string, x: number, y: number, type: ShapeTypeEnum, width: number, height: number){
        this.id = id;
        this.x = x;
        this.y = y;
        this.type = type;
        this.width = width;
        this.height = height;
    }
}