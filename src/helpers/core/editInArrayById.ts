import { logError } from "./customLogger";
import { IId } from "./IId";

export const EditInArrayById = <Type extends IId>(arr:Array<Type>, item:Type) : Array<Type> =>{
    let response: Array<Type> = [];
    let isMissing: boolean = true;
    for(let i = 0; i < arr.length; i ++){
        let tempItem = arr[i];
        if(item.id === tempItem.id){
            tempItem = item;
            isMissing = false;
        }
        response.push(tempItem);
    }
    if(isMissing){
        logError(`Cant edit ${JSON.stringify(item)} because is not presented in ${JSON.stringify(arr)}`);
    }
    return response;
}