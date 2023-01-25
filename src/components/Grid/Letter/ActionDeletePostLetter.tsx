import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePostLetterById } from "./helpers";

export const ActionDeletePostLetter: TypeColumn[] = [
  {
    name: "delete",
    header: "Удалить",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <IconButton
          color="error"
          onClick={() => deletePostLetterById(data._id)}
        >
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];
