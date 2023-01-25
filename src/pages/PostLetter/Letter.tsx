import { Box, Button, Stack } from "@mui/material";
import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllLetters } from "../../api/letter";
import { filterValue } from "../../components/Grid/InComing/InFilter";
import { columns } from "../../components/Grid/Letter/LetterColumns";
import { filterLetters } from "../../components/Grid/Letter/LetterFilter";
import LettersList from "../../components/Grid/LettersList";
import {
  ILoadPostLetter,
  INITIAL_POST_LETTER,
  IPostLetter,
} from "../../interfaces/postLetter";

const Letter = () => {
  const [letters, setLetters] = useState<ILoadPostLetter>({
    isLoading: true,
    error: null,
    postLetters: [],
  });

  useEffect(() => {
    const loadData = async () => {
      const letters = await getAllLetters();
      console.log(letters);
      setLetters({ postLetters: letters, isLoading: false, error: "" });
    };

    loadData();
  }, []);

  return (
    <Stack>
      <Box>
        <Link to="../addletter" color="primary">
          <Button variant="outlined">Добавить отправление</Button>
        </Link>
      </Box>
      {!letters.isLoading && (
        <LettersList
          columns={columns}
          data={letters.postLetters}
          filter={filterLetters}
          style={{ height: "100%" }}
        />
      )}
    </Stack>
  );
};

export default Letter;
