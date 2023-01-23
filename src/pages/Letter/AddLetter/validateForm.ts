import * as Yup from "yup";

export const validateYup = Yup.object({
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
