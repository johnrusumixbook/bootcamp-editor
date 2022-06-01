import { DragPreviewImage, useDrag } from "react-dnd";
import { DragTypeEnum } from "../../../data/dragTypeEnum";
import { DrawnShapeModel } from "../../../data/drawnShapeModel";
import { DrawnShapeResizeModel } from "../../../data/drawnShapeResizeModel";
import previewImage from "../../../assets/transparent.jpeg";

interface ISelectionDotsProps {
  isSelected: boolean;
  model: DrawnShapeModel;
}

export const SelectionDots = (props: ISelectionDotsProps) => {
  const [, resizeTLRef, previewTL] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 1, 1, -1, -1),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeTCRef, previewTC] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 0, 1, 0, -1),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeTRRef, previewTR] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 0, 1, 1, -1),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeLCRef, previewLC] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 1, 0, -1, 0),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeRCRef, previewRC] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 0, 0, 1, 0),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeBLRef, previewBL] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 1, 0, -1, 1),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeBCRef, previewBC] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 0, 0, 0, 1),
      collect: () => ({}),
    }),
    [props.model]
  );

  const [, resizeBRRef, previewBR] = useDrag(
    () => ({
      type: DragTypeEnum.RESIZE,
      item: new DrawnShapeResizeModel(props.model, 0, 0, 1, 1),
      collect: () => ({}),
    }),
    [props.model]
  );
  if (props.isSelected) {
    return (
      <>
        <DragPreviewImage connect={previewTL} src={previewImage} />
        <div className="dot dot_tl" ref={resizeTLRef} />

        <DragPreviewImage connect={previewTC} src={previewImage} />
        <div className="dot dot_tc" ref={resizeTCRef} />

        <DragPreviewImage connect={previewTR} src={previewImage} />
        <div className="dot dot_tr" ref={resizeTRRef} />

        <DragPreviewImage connect={previewLC} src={previewImage} />
        <div className="dot dot_lc" ref={resizeLCRef} />

        <DragPreviewImage connect={previewRC} src={previewImage} />
        <div className="dot dot_rc" ref={resizeRCRef} />

        <DragPreviewImage connect={previewBL} src={previewImage} />
        <div className="dot dot_bl" ref={resizeBLRef} />

        <DragPreviewImage connect={previewBC} src={previewImage} />
        <div className="dot dot_bc" ref={resizeBCRef} />

        <DragPreviewImage connect={previewBR} src={previewImage} />
        <div className="dot dot_br" ref={resizeBRRef} />
      </>
    );
  }
  return <></>;
};
