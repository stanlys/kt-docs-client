import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import style from "./AddLetter.module.scss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import BusinessIcon from "@mui/icons-material/Business";
import Person2Icon from "@mui/icons-material/Person2";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import "dayjs/locale/ru";
import * as Yup from "yup";

import { string } from "prop-types";

const AddLetter = () => {
  const validateYup = Yup.object({
    trackNumber: Yup.string()
      .min(6, "Должно быть длиннее 6 символов")
      .required("Обязательное поле"),
    receiver: Yup.string()
      .min(6, "Должно быть длиннее 6 символов")
      .required("Обязательное поле"),
    address: Yup.string()
      .min(6, "Должно быть длиннее 6 символов")
      .required("Обязательное поле"),
    sender: Yup.string()
      .min(6, "Должно быть длиннее 6 символов")
      .required("Обязательное поле"),
  });

  const formAddPost = useFormik({
    initialValues: {
      date: Date.now(),
      trackNumber: "",
      receiver: "",
      address: "",
      sender: "",
    },
    validationSchema: validateYup,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()));

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  return (
    <Box component={"form"} onSubmit={formAddPost.submitForm}>
      <Typography variant="h5"> Добавление нового отправления</Typography>
      <Divider sx={{ mt: 2 }} />

      <Paper elevation={2} className={style.form}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
          <Box className={style.datePickerGroup}>
            <DesktopDatePicker
              label="Дата отправки"
              inputFormat="DD.MM.YYYY"
              value={formAddPost.values.date}
              onChange={formAddPost.handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: 250 }}
                  helperText={formAddPost.errors.date}
                  error={
                    (formAddPost.touched.date &&
                      formAddPost.errors.date) as boolean
                  }
                />
              )}
            />
            <Button onClick={() => setDate(dayjs(Date.now()).add(-1, "day"))}>
              Вчера
            </Button>
          </Box>
        </LocalizationProvider>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <ShareLocationIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            label="Введите трек номер"
            variant="standard"
            fullWidth
            error={formAddPost.errors.trackNumber !== undefined}
            helperText={formAddPost.errors.trackNumber}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Person2Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField label="Получатель" variant="standard" fullWidth />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <BusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField label="Адрес получателя" variant="standard" fullWidth />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TransferWithinAStationIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField label="Отправитель" variant="standard" fullWidth />
        </Box>
        <Button type="submit" variant="outlined" color="success" >
          Добавить
        </Button>
      </Paper>
    </Box>
  );
};

export default AddLetter;
