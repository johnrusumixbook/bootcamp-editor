import { ShapeTypeEnum } from "./shapeTypeEnum";
import {v4 as uuidv4} from 'uuid';

export class DrawnShapeModel{
    id: string;
    x: number;
    y: number;
    type: ShapeTypeEnum;
    width: number;
    height: number;
    isSelected:boolean;

    constructor( x: number, y: number, type: ShapeTypeEnum, width: number, height: number, id:string = uuidv4(), isSelected:boolean=false){
        this.id = id;
        this.x = x;
        this.y = y;
        this.type = type;
        this.width = width;
        this.height = height;
        this.isSelected = isSelected;
    }
}