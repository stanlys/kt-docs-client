import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100vh", height: "100vw" }}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        sx={{
          display: "flex",
          height: "100vw",
        }}
      >
        <Paper elevation={2} sx={{ p: 10 }}>
          <Box>
            <Typography variant="h3">404</Typography>
            <Divider sx={{ color: "gray", height: "1px" }} />
            <Typography variant="h5">ТАКОГО АДРЕСА НЕТ</Typography>
          </Box>
          <Button fullWidth onClick={() => navigate(-1)}>
            Назад
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default NotFound;
