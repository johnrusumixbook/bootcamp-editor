import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { ShapeTypeEnum } from "../../../data/shapeTypeEnum";
import "./drawnShape.css";

interface IDrawnShape {
  model: DrawnShapeModel;
}

const DrawnShape = (props: IDrawnShape) => {
  switch (props.model.type) {
    case ShapeTypeEnum.CIRLCE:
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
        </g>
      );
      break;
    case ShapeTypeEnum.TRIANGLE:
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
        </g>
      );
      break;
    case ShapeTypeEnum.RECT:
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
        </g>
      );
      break;
  }

  <g>{}</g>;
};

export default DrawnShape;
