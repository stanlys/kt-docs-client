import { Box, Divider, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";

const NotFound = () => {
  return (
    <Box sx={{ width: "100vh", height: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContents: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">404</Typography>
        <Divider sx={{ color: "gray", height: "1px" }} />
        <Typography variant="h5">ТАКОГО АДРЕСА НЕТ</Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
