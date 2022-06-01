import { useCallback } from "react";
import { ConnectDragSource } from "react-dnd";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { SelectionDots } from "./selectionDots";

interface IDrawnRectProps {
  model: DrawnShapeModel;
  dragRef: ConnectDragSource;
  onSelection: any;
}

const BORDER_THICKNESS = 5;

export const DrawnRect = (props: IDrawnRectProps) => {
  const onClickCB = useCallback(
    (event: any) => {
      props.onSelection(event, props.model);
    },
    [props]
  );

  return (
    <g>
      <rect
        className="drawnShape"
        id={props.model.id}
        x={props.model.x}
        y={props.model.y}
        width={props.model.width}
        height={props.model.height}
      />
      <foreignObject
        x={props.model.x - BORDER_THICKNESS}
        y={props.model.y - BORDER_THICKNESS}
        height={props.model.height + BORDER_THICKNESS * 2}
        width={props.model.width + BORDER_THICKNESS * 2}
      >
        <div
          style={{ padding: BORDER_THICKNESS }}
          className={`drawnShape__foreignObject ${
            props.model.isSelected ? "selected" : ""
          }`}
        >
          <div className="drawnShape__foreignObject" onClick={onClickCB}>
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
