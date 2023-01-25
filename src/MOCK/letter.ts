import { IPostLetter } from "../interfaces/postLetter";

export const dataLetters: Array<IPostLetter> = [
  {
    id: "1",
    date: Date.now(),
    trackNumber: "125/23",
    postman: "Спецсвязь",
    letterType: "Письмо",
    receiver: "ПАО Россети Центра - Ярэнерго",
    sender: "Писаренко В.Н.",
    address: "Челнаков С.А.",
  },
  {
    id: "2",
    date: Date.now(),
    trackNumber: "126/23",
    postman: "Спецсвязь",
    letterType: "Письмо",
    receiver: "ПАО Россети Центра - Смоленск",
    sender: "Писаренко В.Н.",
    address: "Маликов Д.А.",
  },
  {
    id: "3",
    date: Date.now(),
    trackNumber: "126/23",
    postman: "Почта РФ",
    letterType: "Письмо",
    receiver: "ПАО Россети Центра - Смоленск",
    sender: "Писаренко В.Н.",
    address: "Маликов Д.А.",
  },
];
