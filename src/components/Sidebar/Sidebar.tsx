import React from "react";
import { Box, Divider, List } from "@mui/material";
import Paper from "@mui/material/Paper";
import { mainListItems, secondaryListItems } from "./MenuItems";

interface SidebarProps {
  mainMenu?: JSX.Element;
  subMenu?: JSX.Element;
}

const Sidebar: React.FC<SidebarProps> = ({mainMenu, subMenu}) => {
  return (
    <Box sx={{ width: "20rem", m: 2 }}>
      <Paper elevation={2}>
        <List component="nav">
          {mainMenu}
          <Divider sx={{ my: 1 }} />
          {subMenu}
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
