import { Box, Divider, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddLetter.module.scss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import {
  DesktopDatePicker,
  LocalizationProvider,
  MuiPickersAdapterContext,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import { ruRU } from "@mui/x-data-grid";

const AddLetter = () => {
  const formAddPost = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [date, setDate] = React.useState<Moment | null>(moment(Date.now()));

  const handleChange = (newValue: Moment | null) => {
    setDate(newValue);
  };

  return (
    <Box>
      <Typography variant="h5"> Добавление нового отправления</Typography>
      <Divider sx={{ mt: 2 }} />

      <Paper elevation={2} className={style.form}>
        <LocalizationProvider dateAdapter={AdapterMoment} locale={"ru"}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="DD.MM.YYYY"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocalShippingIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField label="Введите трек номер" variant="standard" fullWidth />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocalShippingIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField label="Получатель" variant="standard" fullWidth />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocalShippingIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField label="Адрес получателя" variant="standard" fullWidth />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LocalShippingIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField label="Отправитель" variant="standard" fullWidth />
        </Box>
      </Paper>
    </Box>
  );
};

export default AddLetter;
