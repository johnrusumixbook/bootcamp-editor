import { useCallback } from "react";
import { ConnectDragSource } from "react-dnd";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { SelectionDots } from "./selectionDots";

interface IDrawnTriangleProps {
  model: DrawnShapeModel;
  dragRef: ConnectDragSource;
  onSelection: any;
}

const BORDER_THICKNESS = 5;

export const DrawnTriangle = (props: IDrawnTriangleProps) => {
  const onClickCB = useCallback(
    (event: any) => {
      props.onSelection(event, props.model);
    },
    [props]
  );

  return (
    <g>
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
          <div className="drawnShape__foreignObject" ref={props.dragRef}></div>
        </div>
      </foreignObject>
    </g>
  );
};
