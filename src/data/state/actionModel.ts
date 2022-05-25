import { ActionType } from "./actionType";

export class ActionModel{
    type: ActionType;
    payload: any;

    constructor(type: ActionType, payload: any) {
        this.type = type;
        this.payload = payload;
    }
}