import React, { ReactElement, useEffect, useState } from "react";
import { OverlayTrigger as BootStrapOverlayTrigger } from "react-bootstrap";
import { OverlayChildren } from "react-bootstrap/esm/Overlay";
import { useAppContext } from "utils/context";
import { isNull } from "utils/functions/data";

export interface OverlayTriggerProps {
  placement?:
    | "auto-start"
    | "auto"
    | "auto-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";
  render: (
    props: any,
    children: any,
    validate?: string,
    style?: any
  ) => OverlayChildren;
  renderChildren: any;
  invalid?: string;
  children: ReactElement | any;
  style?: any;
}

const OverlayTrigger: React.FC<OverlayTriggerProps> = ({
  children,
  render,
  renderChildren,
  invalid,
  placement = !isNull(invalid) ? "left" : "top-end",
  style,
}: OverlayTriggerProps) => {
  const { store } = useAppContext();
  const [rendering, setRendering] = useState(store?.renderCount);

  useEffect(() => {
    setRendering(store?.renderCount);
  }, [store?.renderCount]);

  return (
    <BootStrapOverlayTrigger
      placement={placement}
      show={
        rendering === store?.renderCount &&
        !isNull(invalid) &&
        !isNull(renderChildren)
          ? true
          : undefined
      }
      overlay={(props) => render(props, renderChildren, invalid, style)}
    >
      {({ ref, ...props }) => {
        return React.createElement("div", { ref: ref, ...props }, children);
      }}
    </BootStrapOverlayTrigger>
  );
};

export default React.memo(OverlayTrigger);
