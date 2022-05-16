import ShapeModel from "./shapeModel";

export default class WorkspaceModel{
    items: ShapeModel[]
    constructor(items: ShapeModel[] = new Array<ShapeModel>()){
        this.items = items;
    }
}