import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Additional = () => {
  return (
    <Box>
      <Typography color="error" variant="h6">
        Дополнительные настройки
      </Typography>
      <Paper elevation={1}>
        <Typography>
          Обращаю Ваше внимание, что команды в данном разделе выполняются
          безвовратно
        </Typography>
        <Divider />
        <List sx={{ m: 2 }}>
          <ListItem>
            <Typography>Удалить все письма</Typography>
            <Button>Удалить</Button>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Additional;
