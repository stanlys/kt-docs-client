import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const ActionDelete: TypeColumn[] = [
  {
    name: "delete",
    header: "Удалить",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <IconButton
          color="error"
          onClick={() => console.log("delete", data.outNumber)}
        >
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];
