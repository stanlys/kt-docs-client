import React from "react";
import { Box, Divider, List } from "@mui/material";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/material/styles";
import { SideBarHidden, useMinWidth } from "../../hooks/useResponsive";

interface SidebarProps {
  mainMenu?: JSX.Element;
  subMenu?: JSX.Element;
}

const Sidebar: React.FC<SidebarProps> = ({ mainMenu, subMenu }) => {
  return (
    <SideBarHidden>
      <Paper elevation={2}>
        <List component="nav">
          {mainMenu}
          <Divider sx={{ my: 1 }} />
          {subMenu}
        </List>
      </Paper>
    </SideBarHidden>
  );
};

export default Sidebar;
