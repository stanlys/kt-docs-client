import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import moment from "moment";
import { ActionDeletePostLetter } from "./ActionDeletePostLetter";

export const columns: TypeColumn[] = [
  {
    name: "trackNumber",
    header: "Трек номер",
    defaultFlex: 1,
    style: { color: "primary", fontWeight: "bold" },
  },
  {
    name: "postman",
    header: "Отправлено",
    defaultFlex: 1,
  },
  {
    name: "date",
    header: "Дата отправки",
    dateFormat: "DD.MM.YYYY",
    minWidth: 10,
    defaultFlex: 1,
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "DD.MM.YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return moment(value).format("DD.MM.YYYY");
    },
  },
  {
    name: "letterType",
    header: "Тип",
    defaultFlex: 1,
  },
  { name: "receiver", header: "Получатель", defaultFlex: 1 },
  { name: "address", header: "Адрес", defaultFlex: 1 },
  { name: "sender", header: "Отправитель", defaultFlex: 1 },

  ...ActionDeletePostLetter,
];
