import { addInArrayById } from "../../helpers/core/addInArrayById";
import { logError } from "../../helpers/core/customLogger";
import { editInArrayById } from "../../helpers/core/editInArrayById";
import { removeFromArrayById } from "../../helpers/core/removeFromArrayById";
import { DrawnShapeModel } from "../drawnShapeModel";
import { ActionModel } from "../state/actionModel";
import { ActionType } from "../state/actionType";

const defaultState:DrawnShapeModel[] = [];

export const EditorStateReducer = (editorState: any = [], action: ActionModel): DrawnShapeModel[] => {
    switch(action.type){
        case ActionType.SET_EDITOR:
            return action.payload ?? [];
        case ActionType.ADD_EDITOR_ITEM:
            return addInArrayById(editorState, action.payload);
        case ActionType.EDIT_EDITOR_ITEM:
            return editInArrayById(editorState, action.payload);
        case ActionType.REMOVE_EDITOR_ITEM:
            return removeFromArrayById(editorState, action.payload);
        default: 
            logError("ActionType is out of range for ");
            return editorState;
    }
}