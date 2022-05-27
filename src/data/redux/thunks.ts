import { Dispatch } from "redux";
import { remoteState } from "../../core/backendStateSync";
import { logError } from "../../helpers/core/customLogger";
import { ActionModel } from "../state/actionModel";
import { ActionType } from "../state/actionType";
import { StateModel } from "../state/stateModel";


export const initStateThunk = ()=>{
    return (dispatch:Dispatch)=>{
        return remoteState.getAsync()
        .then((state:StateModel)=>{
            dispatch({...new ActionModel(ActionType.SET_EDITOR, state.editorState)});
        }).catch((e)=>{
            logError(e);
        })
    }
}

export const syncStateThunk = (state: StateModel)=>{
    return (dispatch:Dispatch)=>{
        return remoteState.setAsync(state)
        .catch((e)=>{
            logError(e);
        })
    }
}