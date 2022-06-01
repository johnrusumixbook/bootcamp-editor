import { useDragDropManager, XYCoord } from "react-dnd";
import { DragTypeEnum } from "../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../data/drawnShapeModel";
import { mapPixelsToSvgCoordinate } from "../../helpers/ui/svg";

type Callback = (item: DrawnShapeModel, x:number, y:number) => void; 

const SVG_VIEWPORT_WIDTH = 1200;
const SVG_VIEWPORT_HEIGHT = 600;

export const  useItemDrag = (callback: Callback) =>{
    const monitor = useDragDropManager().getMonitor();
    monitor.subscribeToOffsetChange(() => {
        let item = monitor.getItem();
        if (!item) return;
        if(item instanceof DrawnShapeModel && monitor.getItemType() == DragTypeEnum.DRAG){
            let delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            if(!delta) return;
            const rect: DOMRect = document.getElementById("some_id")?.getBoundingClientRect() as DOMRect;          
            const x = item.x +  mapPixelsToSvgCoordinate(rect.width, SVG_VIEWPORT_WIDTH, delta.x);
            const y = item.y + mapPixelsToSvgCoordinate(rect.height, SVG_VIEWPORT_HEIGHT, delta.y);   
            callback(item, x, y);
        }
    });
}