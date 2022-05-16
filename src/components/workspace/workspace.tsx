import React from "react";
import { ConnectDropTarget } from "react-dnd";
import { DrawnShapeModel } from "../../data/drawnShapeModel";
import ShapeModel from "../../data/shapeModel";
import Shape from "../palette/shape/shape";
import DrawnShape from "./drawnShape/drawnShape";
import "./workspace.css";

interface IWorkspaceModel {
  items: ShapeModel[];
  dropHook: ConnectDropTarget;
}

const Workspace = (props: IWorkspaceModel) => {
  return (
    <div className="workspace" ref={props.dropHook}>
      <svg
        className="canvas"
        viewBox="0 0 1200 600"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.items.map((item) => (
          <DrawnShape
            model={new DrawnShapeModel(item.id, 20, 20, item.type, 100, 100)}
          />
        ))}
      </svg>
    </div>
  );
};

export default Workspace;
