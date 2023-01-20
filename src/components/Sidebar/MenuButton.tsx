import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  link: string;
  caption: string;
  icon: JSX.Element;
}

const MenuButton: React.FC<MenuButtonProps> = ({ caption, icon, link }) => {
  return (
    <Link to={link}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={caption} />
      </ListItemButton>
    </Link>
  );
};

export default MenuButton;
