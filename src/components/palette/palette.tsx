import React from "react";
import ShapeModel from "../../data/shapeModel";
import "./palette.css";
import Shape from "./shape/shape";

interface IPaletteProps {
  items: ShapeModel[];
}

const Palette = (props: IPaletteProps) => {
  return (
    <div className="palette">
      {props.items.map((item, i) => (
        <Shape model={item} key={i} />
      ))}
    </div>
  );
};

export default Palette;
