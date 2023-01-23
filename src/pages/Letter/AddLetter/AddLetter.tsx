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
import DateSelect from "./DateSelect";
import EntryField from "./EntryField";

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
            error=""
            isError={false}
            label={"222"}
            
            icon={ShareLocationIcon}
          />
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <ShareLocationIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              label="Введите трек номер"
              variant="standard"
              name="trackNumber"
              value={values.trackNumber}
              onChange={handleChange}
              fullWidth
              required
              error={touched.trackNumber && Boolean(errors.trackNumber)}
              helperText={errors.trackNumber}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Person2Icon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Получатель"
              name="receiver"
              variant="standard"
              fullWidth
              value={values.receiver}
              onChange={handleChange}
              error={touched.receiver && Boolean(errors.receiver)}
              helperText={errors.receiver}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <BusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              label="Адрес получателя"
              name="address"
              variant="standard"
              fullWidth
              value={values.address}
              onChange={handleChange}
              error={touched.address && Boolean(errors.address)}
              helperText={errors.address}
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
              value={values.sender}
              onChange={handleChange}
              error={touched.sender && Boolean(errors.sender)}
              helperText={errors.sender}
            />
          </Box>
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
