import { useState } from "react";
import Palette from "../palette/palette";
import Workspace from "../workspace/workspace";
import "./editor.css";
import { useDrop } from "react-dnd";
import ShapeModel from "../../data/shapeModel";
import WorkspaceModel from "../../data/workspaceModel";
import { DragTypeEnum } from "../../data/dragTypeEnum";
import { ShapeTypeEnum } from "../../data/shapeTypeEnum";
import { log } from "console";

const PaletteItems: ShapeModel[] = [
  new ShapeModel(
    "assets/shapes.svg#square",
    `<rect id="square" x="5" y="5" width="40" height="40" />`,
    ShapeTypeEnum.RECT
  ),
  new ShapeModel(
    "assets/shapes.svg#circle",
    `<circle id="circle" cx="25" cy="25" r="20" />`,
    ShapeTypeEnum.CIRLCE
  ),
  new ShapeModel(
    "assets/shapes.svg#triangle",
    `<polygon id="triangle" points="7,40 24,7 43,40" />`,
    ShapeTypeEnum.TRIANGLE
  ),
];

const Editor = () => {
  const [workspace, setWorkspace] = useState(new WorkspaceModel());
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DragTypeEnum.SVG,
    drop: (item: ShapeModel, monitor) => addSvgToWorkspace(item, monitor),
    collect: (monitor) => ({ isOver: !!monitor.isOver }),
  }));

  const addSvgToWorkspace = (item: ShapeModel, monitor: any) => {
    console.log(monitor);
    let newState = { ...workspace };
    newState.items.push(item);
    setWorkspace(newState);
  };

  return (
    <div className="editor">
      <Palette items={PaletteItems} />
      <Workspace items={workspace.items} dropHook={drop} />
    </div>
  );
};

export default Editor;
