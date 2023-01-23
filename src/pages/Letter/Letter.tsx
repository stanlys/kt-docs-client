import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { filterValue } from "../../components/Grid/InComing/InFilter";
import { columns } from "../../components/Grid/Letter/LetterColumns";
import { filterLetters } from "../../components/Grid/Letter/LetterFilter";
import LettersList from "../../components/Grid/LettersList";
import { dataSource } from "../../MOCK/data";
import { dataLetters } from "../../MOCK/letter";

const Letter = () => {
  return (
    <Stack>
      <Box>
        <Link to="../addletter" color="primary">
          <Button variant="outlined">Добавить отправление</Button>
        </Link>
      </Box>
      <LettersList
        columns={columns}
        data={dataLetters}
        filter={filterLetters}
      />
    </Stack>
  );
};

export default Letter;
