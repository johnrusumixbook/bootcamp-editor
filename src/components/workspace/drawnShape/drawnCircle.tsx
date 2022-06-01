import { ConnectDragSource, DragPreviewImage } from "react-dnd";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { SelectionDots } from "./selectionDots";

interface IDrawnCircleProps {
  model: DrawnShapeModel;
  dragRef: ConnectDragSource;
  onSelection: any;
}

export const DrawnCircle = (props: IDrawnCircleProps) => {
  let borderThikness = 5;
  return (
    <g className="gstyle">
      <ellipse
        className="drawnShape"
        id={props.model.id}
        cx={props.model.x + props.model.width / 2}
        cy={props.model.y + props.model.height / 2}
        rx={props.model.width / 2}
        ry={props.model.height / 2}
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
          onClick={(e) => props.onSelection(e, props.model)}
        >
          <SelectionDots
            isSelected={props.model.isSelected}
            model={props.model}
          />
          <div
            className="drawnShape__foreignObject"
            style={{ padding: 5 }}
            ref={props.dragRef}
          ></div>
        </div>
      </foreignObject>
    </g>
  );
};
