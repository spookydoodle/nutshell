import React from "react";
import { Slide, useScrollTrigger } from "@mui/material";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export const HideOnScroll: React.FC<Props> = ({ window, children }) => {
  const trigger = useScrollTrigger({ target: window && window() });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
