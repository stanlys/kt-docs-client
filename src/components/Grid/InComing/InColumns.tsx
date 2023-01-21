import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import DeleteIcon from "@mui/icons-material/Delete";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { ActionEditPreview } from "../ActionEdit";
import { ActionDelete } from "../ActionDelete";

export const columns: TypeColumn[] = [
  ...ActionEditPreview,
  {
    name: "outNumber",
    header: "№ Исх.",
    maxWidth: 150,
    defaultFlex: 1,

    style: { color: "primary", fontWeight: "bold" },
  },
  {
    name: "date",
    header: "Дата",
    dateFormat: "YYYY-MM-DD",
    minWidth: 10,
    defaultFlex: 1,
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "MM-DD-YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return moment(value).format("MM-DD-YYYY");
    },
  },
  { name: "inNumber", header: "№ Вх.", defaultFlex: 1 },
  {
    name: "dateOrder",
    header: "Дата получения",
    defaultFlex: 1,
    dateFormat: "YYYY-MM-DD",
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "MM-DD-YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return value === "" ? "" : moment(value).format("MM-DD-YYYY");
    },
  },
  {
    name: "letterType",
    header: "Тип",
    defaultFlex: 1,
  },
  { name: "receiver", header: "Получатель", defaultFlex: 1 },
  { name: "sender", header: "Отправитель", defaultFlex: 1 },
  { name: "executor", header: "Исполнитель", defaultFlex: 1 },
  { name: "letterTitle", header: "Содержание", defaultFlex: 1 },
  ...ActionDelete,
];
