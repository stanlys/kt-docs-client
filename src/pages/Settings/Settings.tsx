import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { settingList } from "../../components/Sidebar/MenuItems";
import Sidebar from "../../components/Sidebar/Sidebar";
import style from "./Settings.module.scss";

const Settings = () => {
  return (
    <Box>
      <Typography variant="h5">Настройки</Typography>
      <Box className={style.wrapper}>
        <Sidebar mainMenu={settingList} />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
