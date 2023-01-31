import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import "@inovua/reactdatagrid-community/index.css";
import { dataSource } from "../../MOCK/data";
import { filterValue } from "../../components/Grid/OutLetter/OutFilter";
import {
  OUT_LETTER_COLUMNS,
  OUTGOING_COLUMNS_ORDER,
} from "../../components/Grid/OutLetter/OutColumns";
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
        columns={OUT_LETTER_COLUMNS}
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
