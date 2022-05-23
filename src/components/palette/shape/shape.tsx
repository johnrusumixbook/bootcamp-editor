import React from "react";
import ShapeModel from "../../../data/shapeModel";
import { useDrag } from "react-dnd";
import { DragTypeEnum } from "../../../data/dragTypeEnum";
import "./shape.css";

interface IShapeModel {
  model: ShapeModel;
}

const Shape = (props: IShapeModel) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypeEnum.SVG,
    item: props.model,
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging };
    },
  }));
  return (
    <div className="shape" ref={drag}>
      <svg
        ref={drag}
        width="50"
        height="50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {props.model.shapeMarkup}
        <use xlinkHref={props.model.xlinkHref} />
      </svg>
    </div>
  );
};

export default Shape;
