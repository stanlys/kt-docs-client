import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import style from "./AddLetter.module.scss";
import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import BusinessIcon from "@mui/icons-material/Business";
import Person2Icon from "@mui/icons-material/Person2";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import "dayjs/locale/ru";
import { INIT_ADD_LETTER } from "./initValue";
import { validateYup } from "./validateForm";

const AddLetter = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()));

  const formAddPost = useFormik({
    initialValues: INIT_ADD_LETTER,
    validationSchema: validateYup,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const changeDate = (newValue: Dayjs | null) => {
    formAddPost.setFieldValue("date", dayjs(Date.now()).add(-1, "day"), false);
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
          console.log(formAddPost.isValid);
          console.log("Form Submit", formAddPost.values);
        }}
      >
        <Paper elevation={2} className={style.form}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
            <Box className={style.datePickerGroup}>
              <DesktopDatePicker
                label="Дата отправки"
                value={date}
                onChange={changeDate}
                inputFormat="DD.MM.YYYY"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ width: 250 }}
                    name="date"
                    helperText={formAddPost.errors.date}
                    error={
                      formAddPost.touched.date &&
                      Boolean(formAddPost.errors.date)
                    }
                  />
                )}
              />
              <Button
                onClick={() => changeDate(dayjs(Date.now()).add(-1, "day"))}
              >
                Вчера
              </Button>
            </Box>
          </LocalizationProvider>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <ShareLocationIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              label="Введите трек номер"
              variant="standard"
              name="trackNumber"
              value={formAddPost.values.trackNumber}
              onChange={formAddPost.handleChange}
              fullWidth
              error={
                formAddPost.touched.trackNumber &&
                Boolean(formAddPost.errors.trackNumber)
              }
              helperText={formAddPost.errors.trackNumber}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Person2Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Получатель"
              name="receiver"
              variant="standard"
              fullWidth
              value={formAddPost.values.receiver}
              onChange={formAddPost.handleChange}
              error={
                formAddPost.touched.receiver &&
                Boolean(formAddPost.errors.receiver)
              }
              helperText={formAddPost.errors.receiver}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <BusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Адрес получателя"
              name="address"
              variant="standard"
              fullWidth
              value={formAddPost.values.address}
              onChange={formAddPost.handleChange}
              error={
                formAddPost.touched.address &&
                Boolean(formAddPost.errors.address)
              }
              helperText={formAddPost.errors.address}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TransferWithinAStationIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              label="Отправитель"
              variant="standard"
              name="sender"
              fullWidth
              value={formAddPost.values.sender}
              onChange={formAddPost.handleChange}
              error={
                formAddPost.touched.sender && Boolean(formAddPost.errors.sender)
              }
              helperText={formAddPost.errors.sender}
            />
          </Box>
          <Button
            type="submit"
            variant="outlined"
            color="success"
            disabled={!formAddPost.isValid}
          >
            Добавить
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddLetter;
