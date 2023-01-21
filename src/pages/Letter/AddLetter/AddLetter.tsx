import { Box, Divider, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddLetter.module.scss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";

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

  const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()));

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  return (
    <Box>
      <Typography variant="h5"> Добавление нового отправления</Typography>
      <Divider sx={{ mt: 2 }} />

      <Paper elevation={2} className={style.form}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
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
