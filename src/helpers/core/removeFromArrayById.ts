import { logError } from "./customLogger";
import { IId } from "./IId";

export const removeFromArrayById = <Type extends IId>(arr:Array<Type>, item:Type) : Array<Type> =>{
    let response: Array<Type> = [];
    for(let i = 0; i < arr.length; i ++){
        let item = arr[i];
        if(item.id !== item.id){
            response.push(item);
        }
    }
    if(arr.length === response.length){
        logError(`Cant remove ${JSON.stringify(item)} is not presented in ${JSON.stringify(arr)}`);
    }
    return response;
}