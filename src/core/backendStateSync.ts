import { StorageKeys } from "../data/state/storageKeys";
import { logError } from "../helpers/core/customLogger";
import { StateModel } from "../data/state/stateModel"

interface IGetStoredState{
    getState: ()=> StateModel;
}

interface IGetStoredStateAsync{
    getStateAsync: ()=> Promise<StateModel>;
}

interface ISetStoredState{
    setState: (stateToStore:StateModel)=>void;
}

interface ISetStoredStateAsync{
    setStateAsync: (stateToStore:StateModel)=>Promise<void>;
}

class StateLocalStorage implements IGetStoredState, ISetStoredState, IGetStoredStateAsync, ISetStoredStateAsync{
    getState = () : StateModel =>{
        let json = localStorage.getItem(StorageKeys.STATE) ?? "";
        try{
            let state: StateModel = JSON.parse(json);
            return state;
        }
        catch(e){
            logError(e);
            let newState: StateModel = new StateModel([]);
            this.setState(newState);
            return newState;
        }
    }

    setState = (state:StateModel)=>{
        localStorage.setItem(StorageKeys.STATE, JSON.stringify(state));
    }

    getStateAsync = () :Promise<StateModel> =>{
        return new Promise<StateModel>((resolve)=>{
            setTimeout(()=>{
                resolve(this.getState());
            }, 0)
        })
    }

    setStateAsync = (state: StateModel) :Promise<void> =>{
        return new Promise<void>((resolve)=>{
            setTimeout(()=>{
                resolve(this.setState(state));
            }, 0)
        })
    }
}


class StateRemoteStorage implements IGetStoredState, ISetStoredState{
    setState = (stateToStore: StateModel) =>{
         new StateLocalStorage().setState(stateToStore);
    }

    getState = () => {
        return new StateLocalStorage().getState();
    }
}

const getRemoteState: IGetStoredStateAsync = new StateLocalStorage(); 
const setRemoteState: ISetStoredStateAsync = new StateLocalStorage(); 

export const remoteState = {
    getAsync: getRemoteState.getStateAsync,
    setAsync: (state: StateModel)=> setRemoteState.setStateAsync(state)
}