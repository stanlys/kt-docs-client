import React from "react";
import { Box, Divider, List } from "@mui/material";
import Paper from "@mui/material/Paper";
import { mainListItems, secondaryListItems } from "./MenuItems";

const Sidebar = () => {
  return (
    <Box sx={{ width: "20rem", m: 2 }}>
      <Paper elevation={2}>
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
