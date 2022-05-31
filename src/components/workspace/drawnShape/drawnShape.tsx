import { memo } from "react";
import { useDrag } from "react-dnd";
import { DragTypeEnum } from "../../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { ShapeTypeEnum } from "../../../data/shapeTypeEnum";
import "./drawnShape.css";

interface IDrawnShape {
  model: DrawnShapeModel;
}

const DrawnShape = (props: IDrawnShape) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DragTypeEnum.SVG,
      item: props.model,
      collect: (monitor) => {
        return { isDragging: monitor.isDragging() };
      },
    }),
    [props.model]
  );

  switch (props.model.type) {
    case ShapeTypeEnum.CIRLCE:
      return (
        <g style={{ cursor: "move" }}>
          <ellipse
            className="drawnShape"
            id={props.model.id}
            cx={props.model.x + props.model.width / 2}
            cy={props.model.y + props.model.height / 2}
            rx={props.model.width / 2}
            ry={props.model.height / 2}
          />
          <foreignObject
            x={props.model.x}
            y={props.model.y}
            width={props.model.width}
            height={props.model.height}
          >
            <div className="drawnShape__foreignObject" ref={dragRef}></div>
          </foreignObject>
        </g>
      );
    case ShapeTypeEnum.TRIANGLE:
      return (
        <g style={{ cursor: "move" }}>
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
            x={props.model.x}
            y={props.model.y}
            width={props.model.width}
            height={props.model.height}
          >
            <div className="drawnShape__foreignObject" ref={dragRef}></div>
          </foreignObject>
        </g>
      );
    case ShapeTypeEnum.RECT:
      return (
        <g style={{ cursor: "move" }}>
          <rect
            className="drawnShape"
            id={props.model.id}
            x={props.model.x}
            y={props.model.y}
            width={props.model.width}
            height={props.model.height}
          />
          <foreignObject
            x={props.model.x}
            y={props.model.y}
            width={props.model.width}
            height={props.model.height}
          >
            <div className="drawnShape__foreignObject" ref={dragRef}></div>
          </foreignObject>
        </g>
      );
  }
};

export default memo(DrawnShape);
