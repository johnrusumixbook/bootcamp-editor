import { useCallback } from "react";
import { ConnectDragSource, DragPreviewImage } from "react-dnd";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { SelectionDots } from "./selectionDots";

interface IDrawnCircleProps {
  model: DrawnShapeModel;
  dragRef: ConnectDragSource;
  onSelection: any;
}

const BORDER_THICKNESS = 5;

export const DrawnCircle = (props: IDrawnCircleProps) => {
  const onClickCB = useCallback(
    (event: any) => {
      props.onSelection(event, props.model);
    },
    [props]
  );

  return (
    <g>
      <ellipse
        className="drawnShape"
        id={props.model.id}
        cx={props.model.x + props.model.width / 2}
        cy={props.model.y + props.model.height / 2}
        rx={props.model.width / 2}
        ry={props.model.height / 2}
      />
      <foreignObject
        x={props.model.x - BORDER_THICKNESS}
        y={props.model.y - BORDER_THICKNESS}
        width={props.model.width + BORDER_THICKNESS * 2}
        height={props.model.height + BORDER_THICKNESS * 2}
      >
        <div
          className={`drawnShape__foreignObject ${
            props.model.isSelected ? "selected" : ""
          }`}
          onClick={onClickCB}
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
