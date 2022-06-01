import { memo } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import { DragTypeEnum } from "../../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { ShapeTypeEnum } from "../../../data/shapeTypeEnum";
import { DrawnCircle } from "./drawnCircle";
import { DrawnRect } from "./drawnRect";
import "./drawnShape.css";
import { DrawnTriangle } from "./drawnTriangle";
import previewImage from "../../../assets/transparent.jpeg";
interface IDrawnShape {
  model: DrawnShapeModel;
  onSelection: any;
}

const DrawnShape = (props: IDrawnShape) => {
  const [{ isDragging }, dragRef, preview] = useDrag(
    () => ({
      type: DragTypeEnum.DRAG,
      item: props.model,
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    }),
    [props.model]
  );

  switch (props.model.type) {
    case ShapeTypeEnum.CIRLCE:
      return (
        <>
          <DragPreviewImage connect={preview} src={previewImage} />
          <DrawnCircle
            model={props.model}
            dragRef={dragRef}
            onSelection={props.onSelection}
          />
        </>
      );
    case ShapeTypeEnum.TRIANGLE:
      return (
        <>
          <DragPreviewImage connect={preview} src={previewImage} />
          <DrawnTriangle
            model={props.model}
            dragRef={dragRef}
            onSelection={props.onSelection}
          />
        </>
      );
    case ShapeTypeEnum.RECT:
      return (
        <>
          <DragPreviewImage connect={preview} src={previewImage} />
          <DrawnRect
            model={props.model}
            dragRef={dragRef}
            onSelection={props.onSelection}
          />
        </>
      );
  }
};

export default memo(DrawnShape);
