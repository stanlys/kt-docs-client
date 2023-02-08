import {
  Box,
  Button,
  Checkbox,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
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
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { API_ENDPOINTS } from "../../../api/URL";
import { ICreatedLetter } from "../../../interfaces/letter";
import { createOutgoingLetter } from "../../../store/outgoing/thunks";
import ButtonUpload from "../../../components/Buttons/ButtonUpload";
import ButtonBack from "../../../components/Buttons/ButtonBack";
import FormTitle from "../../../components/FormTitle/FormTitle";
import DateSelect from "../../../components/EntryField/DateSelect";

const AddOutLetter = () => {
  const [date, setDate] = React.useState<Dayjs | null>(null);
  //const [file, setFile] = React.useState<any>("");
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

  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const files = (e.target as HTMLInputElement).files;
  //   if (files) {
  //     setFile(files[0]);
  //   }
  // };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    const addedLetter: ICreatedLetter = values;
    formData.append("file", values.file);
    formData.append("sender", values.sender);
    formData.append("date", values.date.toString());
    formData.append("receiver", values.receiver);
    console.log(formData);
    dispatch(createOutgoingLetter(formData));
    //console.log(addedLetter);
    if (error == null) {
      enqueueSnackbar("письмо добавлено", { variant: "success" });
      handleReset(e);
      //changeDate(dayjs(Date.now()));
    } else {
      enqueueSnackbar("ошибка добавления", { variant: "error" });
    }
  };

  return (
    <Box>
      <FormTitle caption="Добавление исходящего письма"></FormTitle>
      <Box component={"form"} onSubmit={submitForm}>
        <Paper elevation={2} className={style.form}>
          <Box className={style.formControl}>
            <Box className={style.formControlArea}>
              <EntryField
                error={errors.receiver}
                isError={Boolean(touched.receiver) && Boolean(errors.receiver)}
                value={values.receiver}
                onChange={handleChange}
                {...formFields.receiver}
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
                error={errors.sender}
                isError={Boolean(touched.sender) && Boolean(errors.sender)}
                value={values.sender}
                onChange={handleChange}
                {...formFields.sender}
              />

              <EntryField
                error={errors.executor}
                isError={Boolean(touched.executor) && Boolean(errors.executor)}
                value={values.executor}
                onChange={handleChange}
                {...formFields.executor}
              />
              <ButtonUpload
                name="file"
                fileSize={values.file.size}
                onChange={handleChange}
                caption={"Загрузить письмо: "}
                uploadFileExt={".pdf, .doc, .docx"}
              />
            </Box>
            <Box className={style.formControlArea}>
              <DateSelect
                label="Дата получения письма"
                value={date}
                changeDate={changeDate}
                error={errors.dateOrder as string}
                isError={Boolean(touched.dateOrder)}
              />
              <EntryField
                error={errors.inNumber}
                isError={Boolean(touched.inNumber) && Boolean(errors.inNumber)}
                value={values.inNumber}
                onChange={handleChange}
                {...formFields.inNumber}
              />
              <EntryField
                error={errors.ResponseToIncoming}
                isError={
                  Boolean(touched.ResponseToIncoming) &&
                  Boolean(errors.ResponseToIncoming)
                }
                value={values.ResponseToIncoming}
                onChange={handleChange}
                {...formFields.responseToIncoming}
              />
              <ButtonUpload
                name={"fileAppendix"}
                fileSize={values.fileAppendix.size}
                onChange={handleChange}
                caption={"Загрузить приложение: "}
                uploadFileExt={".zip"}
              />
            </Box>
          </Box>
          <Box>
            <Divider />
            <Box gap={2} display="flex" justifyContent={"center"} mt={2}>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                disabled={!isValid}
              >
                Добавить
              </Button>
              <Button type="reset" variant="outlined" color="error">
                Очистить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddOutLetter;
