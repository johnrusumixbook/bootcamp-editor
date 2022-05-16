import {v4 as uuidv4} from 'uuid';
import { DrawnShapeModel } from './drawnShapeModel';
import { ShapeTypeEnum } from './shapeTypeEnum';

export default class ShapeModel{ 
    id:string;
    xlinkHref:string;
    shapeMarkup:string;
    type: ShapeTypeEnum;

    constructor(xlinkHref:string, shapeMarkup:string, type: ShapeTypeEnum){
        this.id = uuidv4();
        this.xlinkHref = xlinkHref;
        this.shapeMarkup = shapeMarkup;
        this.type = type;
    }
}