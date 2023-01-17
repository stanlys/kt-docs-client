import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { color } from "@mui/system";

import "@inovua/reactdatagrid-community/index.css";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { TypeFilterValue } from "@inovua/reactdatagrid-community/types";
import NumberFilter from "@inovua/reactdatagrid-community/NumberFilter";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";

const Incoming = () => {
  const columns = [
    { name: "name", header: "Name", minWidth: 50, defaultFlex: 2 },
    { name: "age", header: "Age", maxWidth: 1000, defaultFlex: 1 },
  ];

  const gridStyle = { minHeight: 550 };

  const dataSource = [
    { id: 1, name: "John McQueen", age: 35 },
    { id: 2, name: "Mary Stones", age: 25 },
    { id: 3, name: "Robert Fil", age: 27 },
    { id: 4, name: "Roger Robson", age: 81 },
    { id: 5, name: "Billary Konwik", age: 18 },
    { id: 6, name: "Bob Martin", age: 18 },
    { id: 7, name: "Matthew Richardson", age: 54 },
    { id: 8, name: "Ritchie Peterson", age: 54 },
    { id: 9, name: "Bryan Martin", age: 40 },
    { id: 10, name: "Mark Martin", age: 44 },
    { id: 11, name: "Michelle Sebastian", age: 24 },
    { id: 12, name: "Michelle Sullivan", age: 61 },
    { id: 13, name: "Jordan Bike", age: 16 },
    { id: 14, name: "Nelson Ford", age: 34 },
    { id: 15, name: "Tim Cheap", age: 3 },
    { id: 16, name: "Robert Carlson", age: 31 },
    { id: 17, name: "Johny Perterson", age: 40 },
  ];

  // const columns: GridColDef[] = [
  //   { field: "col1", headerName: "Дата исходящего", width: 150 },
  //   { field: "col2", headerName: "Отправитель", width: 150 },
  // ];
  const filterValue: TypeFilterValue = [
    {
      name: "name",
      operator: "notEmpty",
      type: "string",
      value: " ",
    },
    { name: "age", operator: "eq", type: "number", value: "" },
  ];

  return (
    <Stack>
      <Box>
        <Button> Создать письмо </Button>
      </Box>
      <Box height={"85vh"}>
        {/* <DataGrid rows={rows} columns={columns} sx={{}} /> */}
        <ReactDataGrid
          idProperty="id"
          columns={columns}
          dataSource={dataSource}
          style={gridStyle}
          sortable={true}
          filterable={true}
          defaultFilterValue={filterValue}
          showEmptyRows={false}
        />
      </Box>
    </Stack>
  );
};

export default Incoming;
