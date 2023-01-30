import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import moment from "moment";
import { ActionDeletePostLetter } from "./ActionDeletePostLetter";

let count = 1;
export const columns: TypeColumn[] = [
  {
    name: "Counter",
    header: "№ п/п",
    render: ({ rowIndex }) => {
      return rowIndex + 1;
    },
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
  { name: "receiver", header: "Получатель", defaultFlex: 1 },
  {
    name: "postman",
    header: "Отправлено",
    defaultFlex: 1,
  },
  {
    name: "letterType",
    header: "Тип",
    defaultFlex: 1,
  },
  {
    name: "letterDescription",
    header: "Краткое описание вложения",
    defaultFlex: 1,
  },
  { name: "address", header: "Адрес", defaultFlex: 1 },
  { name: "sender", header: "Отправитель", defaultFlex: 1 },
  {
    name: "trackNumber",
    header: "Трек номер",
    defaultFlex: 1,
    style: { color: "primary", fontWeight: "bold" },
  },

  ...ActionDeletePostLetter,
];
