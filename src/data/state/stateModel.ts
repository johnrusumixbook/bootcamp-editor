import { DrawnShapeModel } from "../drawnShapeModel";

export class StateModel{
    editorState: DrawnShapeModel[];

    constructor(editorState: DrawnShapeModel[]) {
        this.editorState = editorState;
    }
}