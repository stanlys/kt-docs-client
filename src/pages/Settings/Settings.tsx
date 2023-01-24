import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { settingList } from "../../components/Sidebar/MenuItems";
import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    <Box>
      <Typography variant="h5">Настройки</Typography>
      <Sidebar mainMenu={settingList} />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Settings;
