import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

import {
  TypeCollapsedRows,
  TypeColumn,
  TypeFilterValue,
} from "@inovua/reactdatagrid-community/types";
import { createColumn } from "@euxdt/grid-core";
import { ReactDataGrid } from "@euxdt/grid-react";

import "@euxdt/grid-core/styles.css";
import "@euxdt/grid-core/icons.css";

const OutputLetter = () => {
  const columns: TypeColumn[] = [
    {
      name: "action",
      header: "Дата",
      minWidth: 10,
      defaultFlex: 1,
      render: ({ data }) => {
        return (
          <Button color="primary" onClick={() => console.log(data.outNumber)}>
            {data.outNumber}
          </Button>
        );
      },
    },
    {
      name: "date",
      header: "Дата",
      dateFormat: "YYYY-MM-DD",
      minWidth: 10,
      defaultFlex: 1,
    },
    {
      name: "outNumber",
      header: "№ Исх.",
      defaultFlex: 1,
      style: { color: "#ff595e", fontWeight: "bold" },
    },
    { name: "inNumber", header: "№ Вх.", defaultFlex: 1 },
    { name: "dateOrder", header: "Дата получения", defaultFlex: 1 },
    { name: "letterType", header: "Тип", defaultFlex: 1 },
    { name: "receiver", header: "Получатель", defaultFlex: 1 },
    { name: "sender", header: "Отправитель", defaultFlex: 1 },
    { name: "executor", header: "Исполнитель", defaultFlex: 1 },
    { name: "letterTitle", header: "Содержание", defaultFlex: 1 },
  ];

  const gridStyle = { minHeight: "100%" };

  const dataSource = [
    {
      id: 1,
      date: "2023-01-18",
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
      date: "2023-01-18",
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
    { name: "date", operator: "eq", type: "date", value: "" },
    { name: "outNumber", operator: "contains", type: "string", value: "" },
  ];

  return (
    <Stack>
      <Box>
        <Button> Создать письмо </Button>
      </Box>
      <Box height={"85vh"}></Box>
    </Stack>
  );
};

export default OutputLetter;
