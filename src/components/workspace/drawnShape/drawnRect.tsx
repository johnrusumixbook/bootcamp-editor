import { ConnectDragSource } from "react-dnd";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { SelectionDots } from "./selectionDots";

interface IDrawnRectProps {
  model: DrawnShapeModel;
  dragRef: ConnectDragSource;
  onSelection: any;
}

export const DrawnRect = (props: IDrawnRectProps) => {
  let borderThikness = 5;
  return (
    <g className="gstyle">
      <rect
        className="drawnShape"
        id={props.model.id}
        x={props.model.x}
        y={props.model.y}
        width={props.model.width}
        height={props.model.height}
      />
      <foreignObject
        className="gstyle"
        x={props.model.x - borderThikness}
        y={props.model.y - borderThikness}
        height={props.model.height + borderThikness * 2}
        width={props.model.width + borderThikness * 2}
      >
        <div
          style={{ padding: borderThikness }}
          className={
            props.model.isSelected
              ? "drawnShape__foreignObject selected"
              : "drawnShape__foreignObject"
          }
        >
          <div
            className="drawnShape__foreignObject"
            onClick={(event: any) => {
              props.onSelection(event, props.model);
            }}
          >
            <SelectionDots
              isSelected={props.model.isSelected}
              model={props.model}
            />
            <div
              className="drawnShape__foreignObject"
              ref={props.dragRef}
            ></div>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};
