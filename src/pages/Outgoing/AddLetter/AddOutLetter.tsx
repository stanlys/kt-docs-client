import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddOutLetter.module.scss";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { INIT_ADD_LETTER } from "./initValue";
import { validateYup } from "./validateForm";
import EntryField from "../../../components/EntryField/EntryField";
import { formFields } from "./formFields";
import { useSnackbar } from "notistack";
import { ICreatedPostLetter } from "../../../interfaces/postLetter";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addPostLetter } from "../../../store/postLetter/thunk";
import { API_ENDPOINTS } from "../../../api/URL";
import { ICreatedLetter } from "../../../interfaces/letter";

const AddOutLetter = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()));
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { error } = useAppSelector((state) => state.postLetter);
  const dispatch = useAppDispatch();

  const {
    values,
    errors,
    isValid,
    setFieldValue,
    touched,
    handleChange,
    handleReset,
  } = useFormik({
    initialValues: INIT_ADD_LETTER,
    validationSchema: validateYup,
    onSubmit: () => {},
  });

  const changeDate = (newValue: Dayjs | null) => {
    setFieldValue("date", newValue, false);
    setDate(newValue);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = FormData;
    const addedLetter: ICreatedLetter = values;
    //dispatch(add(addedPostLetter));
    console.log(addedLetter);
    if (error == null) {
      enqueueSnackbar("письмо добавлено", { variant: "success" });
      handleReset(e);
      changeDate(dayjs(Date.now()));
    } else {
      enqueueSnackbar("ошибка добавления", { variant: "error" });
    }
  };

  return (
    <Box>
      <Typography variant="h5"> Регистрация исходящего письма </Typography>
      <Divider sx={{ mt: 2 }} />
      <Box component={"form"} onSubmit={submitForm}>
        <Paper elevation={2} className={style.form}>
          <EntryField
            error={errors.sender}
            isError={Boolean(touched.sender) && Boolean(errors.sender)}
            value={values.sender}
            onChange={handleChange}
            {...formFields.sender}
          />
          <EntryField
            error={errors.letterType}
            isError={Boolean(touched.letterType) && Boolean(errors.letterType)}
            value={values.letterType}
            onChange={handleChange}
            {...formFields.letterType}
          />
          <EntryField
            error={errors.letterTitle}
            isError={
              Boolean(touched.letterTitle) && Boolean(errors.letterTitle)
            }
            value={values.letterTitle}
            onChange={handleChange}
            {...formFields.letterTitle}
          />
          <EntryField
            error={errors.receiver}
            isError={Boolean(touched.receiver) && Boolean(errors.receiver)}
            value={values.receiver}
            onChange={handleChange}
            {...formFields.receiver}
          />
          <EntryField
            error={errors.inNumber}
            isError={Boolean(touched.inNumber) && Boolean(errors.inNumber)}
            value={values.inNumber}
            onChange={handleChange}
            {...formFields.inNumber}
          />
          <EntryField
            error={errors.executor}
            isError={Boolean(touched.executor) && Boolean(errors.executor)}
            value={values.executor}
            onChange={handleChange}
            {...formFields.executor}
          />
          <Button variant="contained" component="label">
            Загрузить
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button
            type="submit"
            variant="outlined"
            color="success"
            disabled={!isValid}
          >
            Добавить
          </Button>
          <Button
            variant="outlined"
            color="info"
            href={`${API_ENDPOINTS.LETTER}`}
          >
            Вернуться к списку
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddOutLetter;
