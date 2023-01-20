import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { columns } from "../../components/Grid/InColumns";
import { filterValue } from "../../components/Grid/InFilter";
import LettersList from "../../components/Grid/LettersList";
import { dataSource } from "../../MOCK/data";

const Letter = () => {
  return (
    <Stack>
      <Box>
        <Button> Добавить отправление </Button>
      </Box>
      <LettersList
        columns={columns}
        data={dataSource}
        filter={filterValue}
      />
    </Stack>
  );
};

export default Letter;
