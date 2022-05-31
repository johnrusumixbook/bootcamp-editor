import React from "react";
import { DropTargetMonitor, useDrop, XYCoord } from "react-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DragTypeEnum } from "../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../data/drawnShapeModel";
import ShapeModel from "../../data/shapeModel";
import { ActionType } from "../../data/state/actionType";
import { StateModel } from "../../data/state/stateModel";
import { mapPixelsToSvgCoordinate } from "../../helpers/ui/svg";
import DrawnShape from "./drawnShape/drawnShape";
import { useItemDrag } from "./useItemDrag";
import "./workspace.css";

const Workspace = () => {
  const dispatch = useDispatch();
  const svgViewportWidth = 1200;
  const svgViewportHeight = 600;
  const state = useSelector((state: StateModel) => state.editorState);

  useItemDrag((item, x, y) => {
    dispatch({
      type: ActionType.EDIT_EDITOR_ITEM,
      payload: new DrawnShapeModel(
        x,
        y,
        item.type,
        item.width,
        item.height,
        item.id
      ),
    });
  });

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: DragTypeEnum.SVG,
    drop: (
      item: ShapeModel | DrawnShapeModel,
      monitor: DropTargetMonitor<ShapeModel, unknown>
    ) => addSvgToWorkspace(item, monitor),
    collect: (monitor) => {
      return { isOver: !!monitor.isOver, canDrop: !!monitor.canDrop };
    },
  }));

  const addSvgToWorkspace = (
    item: ShapeModel | DrawnShapeModel,
    monitor: DropTargetMonitor<ShapeModel, unknown>
  ) => {
    if (item instanceof DrawnShapeModel) {
      return;
    }
    let dragOffset = monitor.getClientOffset() as XYCoord;
    const rect: DOMRect = document
      .getElementById("some_id")
      ?.getBoundingClientRect() as DOMRect;
    dispatch({
      type: ActionType.ADD_EDITOR_ITEM,
      payload: new DrawnShapeModel(
        mapPixelsToSvgCoordinate(
          rect.width,
          svgViewportWidth,
          dragOffset.x - rect.x
        ),
        mapPixelsToSvgCoordinate(
          rect.height,
          svgViewportHeight,
          dragOffset.y - rect.y
        ),
        item.type,
        50,
        50
      ),
    });
  };

  return (
    <div className="workspace">
      <svg
        id="some_id"
        className="canvas"
        viewBox="0 0 1200 600"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        ref={(element) => {
          drop(element);
        }}
      >
        {state.map((item, i) => (
          <DrawnShape model={item} key={i} />
        ))}
      </svg>
    </div>
  );
};

export default Workspace;
