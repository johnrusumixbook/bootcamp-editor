import { DrawnShapeModel } from "./drawnShapeModel";

export default class WorkspaceModel{
    items: DrawnShapeModel[]
    constructor(items: DrawnShapeModel[] = new Array<DrawnShapeModel>()){
        this.items = items;
    }
}