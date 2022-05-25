import { AddInArrayById } from "../../helpers/core/addInArrayById";
import { logError } from "../../helpers/core/customLogger";
import { EditInArrayById } from "../../helpers/core/editInArrayById";
import { RemoveFromArrayById } from "../../helpers/core/removeFromArrayById";
import { DrawnShapeModel } from "../drawnShapeModel";
import { ShapeTypeEnum } from "../shapeTypeEnum";
import { ActionModel } from "../state/actionModel";
import { ActionType } from "../state/actionType";

const defaultState = [new DrawnShapeModel(20,10,ShapeTypeEnum.CIRLCE, 10, 10, "some_id")];

export const EditorStateReducer = (editorState: DrawnShapeModel[] = defaultState, action: ActionModel): DrawnShapeModel[] => {
    console.log("history reducer");
    switch(action.type){
        case ActionType.SET_EDITOR:
            return [...editorState];
        case ActionType.ADD_EDITOR_ITEM:
            return AddInArrayById<DrawnShapeModel>(editorState, action.payload.id);
        case ActionType.EDIT_EDITOR_ITEM:
                return EditInArrayById<DrawnShapeModel>(editorState, action.payload.id);
        case ActionType.REMOVE_EDITOR_ITEM:
                return RemoveFromArrayById<DrawnShapeModel>(editorState, action.payload.id);
        default: 
            logError("ActionType is out of range for ");
            return [...editorState];
    }
}