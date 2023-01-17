import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { createColumn } from "@euxdt/grid-core";
import { ReactDataGrid } from "@euxdt/grid-react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Incoming = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Дата исходящего", width: 150 },
    { field: "col2", headerName: "Отправитель", width: 150 },
  ];
  return (
    <Stack>
      <Box>
        <Button> Создать письмо </Button>
      </Box>
      <Box height={"85vh"}>
        <DataGrid rows={rows} columns={columns} sx={{}} />
      </Box>
    </Stack>
  );
};

export default Incoming;
