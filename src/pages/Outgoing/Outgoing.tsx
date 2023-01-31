import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import "@inovua/reactdatagrid-community/index.css";
import { dataSource } from "../../MOCK/data";
import { filterValue } from "../../components/Grid/OutLetter/InFilter";
import {
  columns,
  OUTGOING_COLUMNS_ORDER,
} from "../../components/Grid/OutLetter/InColumns";
import LettersList from "../../components/Grid/LettersList";
import style from "./Outgoing.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonStandby from "../../components/Buttons/ButtonStandby";

const Outgoing = () => {
  const gridStyle = { minHeight: "100%", color: "#223133" };

  const letters = useAppSelector((state) => state.outgoing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log("load letters");
  }, []);

  return (
    <Stack>
      <Box className={style.buttonGroup}>
        <Button variant="outlined"> Создать письмо </Button>
        <ButtonStandby />
      </Box>
      <LettersList
        columns={columns}
        style={gridStyle}
        data={dataSource}
        filter={filterValue}
        columnOrderDefault={OUTGOING_COLUMNS_ORDER}
        LocalStorageKey="OUTGOING"
      />
    </Stack>
  );
};

export default Outgoing;
