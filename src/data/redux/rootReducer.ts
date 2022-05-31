import { combineReducers, createStore } from "redux";
import { EditorStateReducer } from "./editorStateReducer";

const buildRootReducer = ()=>{
    return {
        editorState: EditorStateReducer 
    }
}

export const rootReducer = combineReducers(buildRootReducer());