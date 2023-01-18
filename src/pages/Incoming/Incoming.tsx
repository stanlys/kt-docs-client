import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { color } from "@mui/system";

import "@inovua/reactdatagrid-community/index.css";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import {
  TypeCollapsedRows,
  TypeColumn,
  TypeFilterValue,
} from "@inovua/reactdatagrid-community/types";
import NumberFilter from "@inovua/reactdatagrid-community/NumberFilter";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import PageviewIcon from "@mui/icons-material/Pageview";
import DeleteIcon from "@mui/icons-material/Delete";
import { getGlobal } from "@inovua/reactdatagrid-community/getGlobal";
import moment from "moment";

const columns: TypeColumn[] = [
  {
    name: "preview",
    header: "Просмотр",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <IconButton
          color="primary"
          onClick={() => console.log("Просмотр", data.outNumber)}
        >
          <PageviewIcon />
        </IconButton>
      );
    },
  },
  {
    name: "outNumber",
    header: "№ Исх.",
    maxWidth: 150,
    defaultFlex: 1,

    style: { color: "primary", fontWeight: "bold" },
  },
  {
    name: "date",
    header: "Дата",
    dateFormat: "YYYY-MM-DD",
    minWidth: 10,
    defaultFlex: 1,
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "MM-DD-YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return moment(value).format("MM-DD-YYYY");
    },
  },
  { name: "inNumber", header: "№ Вх.", defaultFlex: 1 },
  { name: "dateOrder", header: "Дата получения", defaultFlex: 1 },
  { name: "letterType", header: "Тип", defaultFlex: 1 },
  { name: "receiver", header: "Получатель", defaultFlex: 1 },
  { name: "sender", header: "Отправитель", defaultFlex: 1 },
  { name: "executor", header: "Исполнитель", defaultFlex: 1 },
  { name: "letterTitle", header: "Содержание", defaultFlex: 1 },
  {
    name: "delete",
    header: "Удалить",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <IconButton
          color="error"
          onClick={() => console.log("delete", data.outNumber)}
        >
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];

const Incoming = () => {
  const gridStyle = { minHeight: "100%" };

  const dataSource = [
    {
      id: 1,
      date: Date.now(),
      outNumber: "125/23",
      inNumber: "",
      dateOrder: "",
      letterType: "Письмо",
      receiver: "ПАО Россети Центра - Ярэнерго",
      sender: "Писаренко В.Н.",
      executor: "Челнаков С.А.",
      letterTitle: "Направление акта выполненных работ",
    },
    {
      id: 2,
      date: Date.now(),
      outNumber: "126/23",
      inNumber: "",
      dateOrder: "",
      letterType: "Письмо",
      receiver: "ПАО Россети Центра - Смоленск",
      sender: "Писаренко В.Н.",
      executor: "Маликов Д.А.",
      letterTitle: "Направление акта выполненных работ",
    },
    {
      id: 2,
      date: Date.now(),
      outNumber: "126/23",
      inNumber: "",
      dateOrder: "",
      letterType: "Письмо",
      receiver: "ПАО Россети Центра - Смоленск",
      sender: "Писаренко В.Н.",
      executor: "Маликов Д.А.",
      letterTitle: "Направление акта выполненных работ",
    },
  ];

  const filterValue: TypeFilterValue = [
    {
      name: "sender",
      operator: "notEmpty",
      type: "string",
      value: " ",
    },
    {
      name: "date",
      operator: "eq",
      type: "date",
      value: "",
    },
    { name: "outNumber", operator: "contains", type: "string", value: "" },
  ];

  return (
    <Stack>
      <Box>
        <Button> Создать письмо </Button>
      </Box>
      <Box height={"85vh"} sx={{ mt: 2 }}>
        <ReactDataGrid
          idProperty="id"
          columns={columns}
          dataSource={dataSource}
          style={gridStyle}
          sortable={true}
          filterable={true}
          defaultFilterValue={filterValue}
          showEmptyRows={false}
          onColumnFilterValueChange={({ filterValue }) => {
            console.log(filterValue);
          }}
          groupBy={["date"]}
        />
      </Box>
    </Stack>
  );
};

export default Incoming;
