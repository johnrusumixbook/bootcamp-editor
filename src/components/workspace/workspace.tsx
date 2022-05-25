import React, { useCallback, useRef, useState } from "react";
import {
  DropTargetMonitor,
  useDragDropManager,
  useDrop,
  XYCoord,
} from "react-dnd";
import { DragTypeEnum } from "../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../data/drawnShapeModel";
import ShapeModel from "../../data/shapeModel";
import WorkspaceModel from "../../data/workspaceModel";
import { mapPixelsToSvgCoordinate } from "../../helpers/ui/svg";
import DrawnShape from "./drawnShape/drawnShape";
import "./workspace.css";

const Workspace = () => {
  const [workspace, setWorkspace] = useState(new WorkspaceModel());
  const dragDropManager = useDragDropManager();
  const monitor = dragDropManager.getMonitor();
  const svgViewportWidth = 1200;
  const svgViewportHeight = 600;
  const stateRef = useRef<WorkspaceModel>();
  stateRef.current = workspace;

  monitor.subscribeToOffsetChange(() => {
    let item = monitor.getItem();
    if (!item) return;
    let delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
    if (!delta || (delta.x === 0 && delta.y === 0)) return;
    //To verify if i drag existing or new. To create array only then dragging existing
    let stateNewItems: DrawnShapeModel[] = [];
    const rect: DOMRect = document
      .getElementById("some_id")
      ?.getBoundingClientRect() as DOMRect;
    for (let i = 0; i < workspace.items.length; i++) {
      let tempItem = workspace.items[i];
      if (tempItem.id === item.id) {
        stateNewItems.push({
          ...tempItem,
          x:
            item.x +
            mapPixelsToSvgCoordinate(rect.width, svgViewportWidth, delta.x),
          y:
            item.y +
            mapPixelsToSvgCoordinate(rect.height, svgViewportHeight, delta.y),
        });
      } else {
        stateNewItems.push(tempItem);
      }
    }
    setWorkspace({ items: stateNewItems });
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
    let stateNewItems: DrawnShapeModel[] = [];
    if (stateRef?.current?.items) {
      stateNewItems = new Array<DrawnShapeModel>().concat(
        stateRef.current.items
      );
    }

    let dragOffset = monitor.getClientOffset() as XYCoord;
    const rect: DOMRect = document
      .getElementById("some_id")
      ?.getBoundingClientRect() as DOMRect;

    stateNewItems.push(
      new DrawnShapeModel(
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
      )
    );
    setWorkspace({ items: stateNewItems });
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
        {workspace.items.map((item, i) => (
          <DrawnShape model={item} key={i} />
        ))}
      </svg>
    </div>
  );
};

export default Workspace;
