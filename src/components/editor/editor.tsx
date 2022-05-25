import { useState } from "react";
import Palette from "../palette/palette";
import Workspace from "../workspace/workspace";
import "./editor.css";
import ShapeModel from "../../data/shapeModel";
import { ShapeTypeEnum } from "../../data/shapeTypeEnum";

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
  return (
    <div className="editor">
      <Palette items={PaletteItems} />
      <Workspace />
    </div>
  );
};

export default Editor;
