import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddLetter.module.scss";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { INIT_ADD_LETTER } from "./initValue";
import { validateYup } from "./validateForm";
import DateSelect from "./DateSelect";
import EntryField from "./EntryField";
import { formFields } from "./formFields";

const AddLetter = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()));

  const { values, errors, isValid, setFieldValue, touched, handleChange } =
    useFormik({
      initialValues: INIT_ADD_LETTER,
      validationSchema: validateYup,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const changeDate = (newValue: Dayjs | null) => {
    setFieldValue("date", dayjs(Date.now()).add(-1, "day"), false);
    setDate(newValue);
  };
  return (
    <Box>
      <Typography variant="h5"> Добавление нового отправления</Typography>
      <Divider sx={{ mt: 2 }} />
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(isValid);
          console.log("Form Submit", values);
        }}
      >
        <Paper elevation={2} className={style.form}>
          <DateSelect
            changeDate={changeDate}
            value={date}
            error={errors.date as string}
            isError={Boolean(touched.date) && Boolean(errors.date)}
          />
          <EntryField
            error={errors.trackNumber}
            isError={
              Boolean(touched.trackNumber) && Boolean(errors.trackNumber)
            }
            value={values.trackNumber}
            onChange={handleChange}
            {...formFields.trackNumber}
          />
          <EntryField
            error={errors.postman}
            isError={Boolean(touched.postman) && Boolean(errors.postman)}
            value={values.postman}
            onChange={handleChange}
            {...formFields.postman}
          />
          <EntryField
            error={errors.receiver}
            isError={Boolean(touched.receiver) && Boolean(errors.receiver)}
            value={values.receiver}
            onChange={handleChange}
            {...formFields.receiver}
          />
          <EntryField
            error={errors.address}
            isError={Boolean(touched.address) && Boolean(errors.address)}
            value={values.address}
            onChange={handleChange}
            {...formFields.address}
          />
          <EntryField
            error={errors.sender}
            isError={Boolean(touched.sender) && Boolean(errors.sender)}
            value={values.sender}
            onChange={handleChange}
            {...formFields.sender}
          />
          <Button
            type="submit"
            variant="outlined"
            color="success"
            disabled={!isValid}
          >
            Добавить
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddLetter;
