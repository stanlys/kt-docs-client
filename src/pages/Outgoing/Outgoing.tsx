import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import "@inovua/reactdatagrid-community/index.css";
import { dataSource } from "../../MOCK/data";
import { filterValue } from "../../components/Grid/InComing/InFilter";
import { columns } from "../../components/Grid/InComing/InColumns";
import LettersList from "../../components/Grid/LettersList";
import style from "./Outgoing.module.scss";
import { useAppSelector } from "../../store/hooks";
import StandbyFormDialog from "../../components/Dialogs/DialogStandby";
import ButtonStandby from "../../components/Buttons/ButtonStandby";

const Outgoing = () => {
  const gridStyle = { minHeight: "100%", color: "#223133" };

  const letters = useAppSelector((state) => state.outgoing);

  useEffect(() => {
    // console.log("load letters");
  }, []);

  return (
    <Stack>
      <Box className={style.buttonGroup}>
        <Button variant="outlined"> Создать письмо </Button>
        <ButtonStandby />
        {/* <Button variant="outlined"> Резерв исходящего</Button> */}
      </Box>
      <LettersList
        columns={columns}
        style={gridStyle}
        data={dataSource}
        filter={filterValue}
      />
    </Stack>
  );
};

export default Outgoing;
