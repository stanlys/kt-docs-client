import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { columns } from "../../components/Grid/Letter/LetterColumns";
import { filterLetters } from "../../components/Grid/Letter/LetterFilter";
import LettersList from "../../components/Grid/LettersList";
import { getAllPostLetters } from "../../store/postLetter/thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import FailedLoader from "../../components/FailedLoader/FailedLoader";

const PostLetter = () => {
  const dispatch = useAppDispatch();
  const letters = useAppSelector((state) => state.postLetter);

  useEffect(() => {
    dispatch(getAllPostLetters());
  }, []);

  return (
    <Stack>
      {letters.error != null && (
        <FailedLoader
          title="Ошибка"
          message="Сервер не отвечает"
          strongMessage="повторите запрос позже!"
        />
      )}
      {!letters.isLoading && letters.error === null && (
        <>
          <Box>
            <Link to="../addletter" color="primary">
              <Button variant="outlined">Добавить отправление</Button>
            </Link>
          </Box>
          <LettersList
            columns={columns}
            data={letters.postLetters}
            filter={filterLetters}
            style={{ height: "100%" }}
          />
        </>
      )}
    </Stack>
  );
};

export default PostLetter;
