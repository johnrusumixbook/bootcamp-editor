import { remoteState } from "../../core/backendStateSync";

export const stateSyncMiddleware = (store:any)=>(next:any)=>(action:any)=>{
    next(action);    
    remoteState.setAsync(store.getState());
}