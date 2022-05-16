import React from "react";
import ShapeModel from "../../data/shapeModel";
import "./palette.css";
import Shape from "./shape/shape";

interface IPaletteModel {
  items: ShapeModel[];
}

const Palette = (props: IPaletteModel) => {
  return (
    <div className="palette">
      {props.items.map((item) => (
        <Shape model={item} />
      ))}
    </div>
  );
};

export default Palette;
