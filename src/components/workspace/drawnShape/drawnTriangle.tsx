import { ConnectDragSource } from "react-dnd";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { SelectionDots } from "./selectionDots";

interface IDrawnTriangleProps {
  model: DrawnShapeModel;
  dragRef: ConnectDragSource;
  onSelection: any;
  // onResize: any;
  // resizeRef: any;
}

export const DrawnTriangle = (props: IDrawnTriangleProps) => {
  let borderThikness = 5;
  return (
    <g className="gstyle">
      <polygon
        className="drawnShape"
        id={props.model.id}
        points={`${props.model.x},${props.model.y + props.model.height} ${
          props.model.x + props.model.width / 2
        },${props.model.y} ${props.model.x + props.model.width},${
          props.model.y + props.model.height
        }`}
      />
      <foreignObject
        className="gstyle"
        x={props.model.x - borderThikness}
        y={props.model.y - borderThikness}
        width={props.model.width + borderThikness * 2}
        height={props.model.height + borderThikness * 2}
      >
        <div
          className={
            props.model.isSelected
              ? "drawnShape__foreignObject selected"
              : "drawnShape__foreignObject"
          }
          onClick={(event: any) => {
            props.onSelection(event, props.model);
          }}
        >
          <SelectionDots
            isSelected={props.model.isSelected}
            model={props.model}
          />
          <div className="drawnShape__foreignObject" ref={props.dragRef}></div>
        </div>
      </foreignObject>
    </g>
  );
};
