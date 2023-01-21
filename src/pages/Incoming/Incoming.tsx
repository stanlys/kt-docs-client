import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import "@inovua/reactdatagrid-community/index.css";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { dataSource } from "../../MOCK/data";
import { filterValue } from "../../components/Grid/InComing/InFilter";
import { columns } from "../../components/Grid/InComing/InColumns";
import LettersList from "../../components/Grid/LettersList";

const Incoming = () => {
  const gridStyle = { minHeight: "100%", color: "#223133" };

  return (
    <Stack>
      <Box>
        <Button> Создать письмо </Button>
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

export default Incoming;
