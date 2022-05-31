import { logError } from "./customLogger";
import { IId } from "./IId";

export const addInArrayById = <Type extends IId>(arr:Array<Type>, item:Type) : Array<Type> =>{
    let existing = arr.find(h=>h.id === item.id);
    if(existing){
        logError(`Cant add ${JSON.stringify(item)} with same id already existing in ${JSON.stringify(arr)}`);
        return [...arr];
    }else{
        return [...arr, item]
    }
}