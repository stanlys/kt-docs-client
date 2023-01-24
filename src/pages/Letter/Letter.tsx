import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllLetters } from "../../api/letter";
import { filterValue } from "../../components/Grid/InComing/InFilter";
import { columns } from "../../components/Grid/Letter/LetterColumns";
import { filterLetters } from "../../components/Grid/Letter/LetterFilter";
import LettersList from "../../components/Grid/LettersList";

import { dataLetters } from "../../MOCK/letter";

const Letter = () => {
  //   useEffect(() => {
  //     const a = getAllLetters();

  //     console.log(a);
  //   }, []);

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
