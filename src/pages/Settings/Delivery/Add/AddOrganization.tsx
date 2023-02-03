import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddOrganization.module.scss";
import React from "react";
import "dayjs/locale/ru";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import EntryField from "../../../../components/EntryField/EntryField";
import { formFieldsDelivery } from "./formFields";
import { API_ENDPOINTS } from "../../../../api/URL";
import { INIT_DELIVERY } from "./initValue";
import { validateYupDelivery } from "./validateForm";

const AddDelivery = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const { error } = useAppSelector((state) => state.postLetter);
  // const dispatch = useAppDispatch();

  const {
    values,
    errors,
    isValid,
    setFieldValue,
    touched,
    handleChange,
    handleReset,
  } = useFormik({
    initialValues: INIT_DELIVERY,
    validationSchema: validateYupDelivery,
    onSubmit: () => {},
  });

  // const submitForm = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const addedPostLetter: ICreatedPostLetter = {
  //     address: values.address,
  //     date: values.date,
  //     letterType: values.letterType,
  //     letterDescription: values.letterDescription,
  //     postman: values.postman,
  //     receiver: values.receiver,
  //     sender: values.sender,
  //     trackNumber: values.trackNumber,
  //   };
  //   dispatch(addPostLetter(addedPostLetter));
  //   if (error == null) {
  //     enqueueSnackbar("письмо добавлено", { variant: "success" });
  //     handleReset(e);
  //     changeDate(dayjs(Date.now()));
  //   } else {
  //     enqueueSnackbar("ошибка добавления", { variant: "error" });
  //   }
  // };

  return (
    <Box>
      <Typography variant="h5"> Добавление новой организации</Typography>

      <Box component={"form"}>
        <Paper elevation={0} className={style.form}>
          <EntryField
            error={errors.orgname}
            isError={
              Boolean(touched.orgname) && Boolean(errors.orgname)
            }
            value={values.orgname}
            onChange={handleChange}
            {...formFieldsDelivery.orgname}
          />
          <EntryField
            error={errors.website}
            isError={Boolean(touched.website) && Boolean(errors.website)}
            value={values.website}
            onChange={handleChange}
            {...formFieldsDelivery.website}
          />
          <EntryField
            error={errors.phone}
            isError={Boolean(touched.phone) && Boolean(errors.phone)}
            value={values.phone}
            onChange={handleChange}
            {...formFieldsDelivery.phone}
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

export default AddDelivery;
