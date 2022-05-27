import { useDragDropManager, XYCoord } from "react-dnd";
import { DrawnShapeModel } from "../../data/drawnShapeModel";
import { mapPixelsToSvgCoordinate } from "../../helpers/ui/svg";

type Callback = (item: DrawnShapeModel, x:number, y:number) => void; 

const svgViewportWidth = 1200;
const svgViewportHeight = 600;

export const  useItemDrag = (callback: Callback) =>{
    const monitor = useDragDropManager().getMonitor();
    monitor.subscribeToOffsetChange(() => {
        let item = monitor.getItem();
        if (!item) return;
        // console.log(item)
        // console.log(item instanceof DrawnShapeModel)
        if(item instanceof DrawnShapeModel){
            //console.log(item)
            let delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            if(!delta) return;
            const rect: DOMRect = document.getElementById("some_id")?.getBoundingClientRect() as DOMRect;          
            const x = item.x +  mapPixelsToSvgCoordinate(rect.width, svgViewportWidth, delta.x);
            const y = item.y + mapPixelsToSvgCoordinate(rect.height, svgViewportHeight, delta.y);   
            callback(item, x, y);
        }
    });
}