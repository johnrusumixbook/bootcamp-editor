import { logError } from "./customLogger";
import { IId } from "./IId";

export const removeFromArrayById = <Type extends IId>(arr:Array<Type>, item:Type) : Array<Type> =>{
    const response = arr.filter((currentItem) => currentItem.id !== item.id);
    if(arr.length === response.length){
        logError(`Cant remove ${JSON.stringify(item)} is not presented in ${JSON.stringify(arr)}`);
    }
    return response;
}