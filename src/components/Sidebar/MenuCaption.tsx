import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMinWidth } from "../../hooks/useResponsive";

interface MenuCaptionProps {
  caption: string;
}

const MenuCaption: React.FC<MenuCaptionProps> = ({ caption }) => {
  const matches = useMinWidth("900");
  return (
    <>
      {matches && (
        <ListSubheader component="div" inset>
          {caption}
        </ListSubheader>
      )}
    </>
  );
};

export default MenuCaption;
