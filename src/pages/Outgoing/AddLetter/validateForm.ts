import * as Yup from "yup";

export const validateYup = Yup.object({
  receiver: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  letterType: Yup.string()
    .required("Обязательное поле")
    .min(5, "Должно быть длинне 5 символов"),
  sender: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
});
