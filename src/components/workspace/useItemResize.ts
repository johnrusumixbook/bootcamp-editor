import { useDragDropManager, XYCoord } from "react-dnd";
import { DragTypeEnum } from "../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../data/drawnShapeModel";
import { DrawnShapeResizeModel } from "../../data/drawnShapeResizeModel";
import { mapPixelsToSvgCoordinate } from "../../helpers/ui/svg";

type Callback = (item: DrawnShapeModel, x:number, y:number, width:number, height:number) => void; 

const svgViewportWidth = 1200;
const svgViewportHeight = 600;

export const  useItemResize = (callback: Callback) =>{
    const monitor = useDragDropManager().getMonitor();
    monitor.subscribeToOffsetChange(() => {
        let resizeModel = monitor.getItem();
        if (!resizeModel) return;       
        if(resizeModel instanceof DrawnShapeResizeModel && monitor.getItemType() == DragTypeEnum.RESIZE){
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord; 
            if(!delta) return;
            const rect: DOMRect = document.getElementById("some_id")?.getBoundingClientRect() as DOMRect; 
            const actualDeltaX = mapPixelsToSvgCoordinate(rect.width, svgViewportWidth, delta.x);
            const actualDeltaY = mapPixelsToSvgCoordinate(rect.height, svgViewportHeight, delta.y);
            const x = resizeModel.shape.x +  actualDeltaX * resizeModel.resizeXCoef;
            const y = resizeModel.shape.y + actualDeltaY * resizeModel.resizeYCoef; 
            const height = resizeModel.shape.height + actualDeltaY * resizeModel.resizeHeightCoef;
            const width = resizeModel.shape.width + actualDeltaX * resizeModel.resizeWidthCoef;
            callback(resizeModel.shape, x, y, width, height);
        }
    });
}