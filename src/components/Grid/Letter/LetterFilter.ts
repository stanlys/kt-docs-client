import { TypeFilterValue } from "@inovua/reactdatagrid-community/types";

export const filterLetters: TypeFilterValue = [
  { name: "outNumber", operator: "contains", type: "string", value: "" },
  {
    name: "date",
    operator: "eq",
    type: "date",
    value: "",
  },
  { name: "letterType", operator: "contains", type: "string", value: "" },
  { name: "receiver", operator: "contains", type: "string", value: "" },
  { name: "address", operator: "contains", type: "string", value: "" },
  {
    name: "sender",
    operator: "notEmpty",
    type: "string",
    value: " ",
  },
];
