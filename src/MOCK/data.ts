import { ILetter } from "../interfaces/letter";

export const dataSource: Array<ILetter> = [
  {
    id: "1",
    date: Date.now(),
    outNumber: "125/23",
    inNumber: "",
    dateOrder: "",
    letterType: "Письмо",
    receiver: "ПАО Россети Центра - Ярэнерго",
    sender: "Писаренко В.Н.",
    executor: "Челнаков С.А.",
    letterTitle: "Направление акта выполненных работ",
  },
  {
    id: "2",
    date: Date.now(),
    outNumber: "126/23",
    inNumber: "",
    dateOrder: "",
    letterType: "Письмо",
    receiver: "ПАО Россети Центра - Смоленск",
    sender: "Писаренко В.Н.",
    executor: "Маликов Д.А.",
    letterTitle: "Направление акта выполненных работ",
  },
  {
    id: "3",
    date: Date.now(),
    outNumber: "126/23",
    inNumber: "",
    dateOrder: "",
    letterType: "Письмо",
    receiver: "ПАО Россети Центра - Смоленск",
    sender: "Писаренко В.Н.",
    executor: "Маликов Д.А.",
    letterTitle: "Направление акта выполненных работ",
  },
];
