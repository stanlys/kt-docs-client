import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import EditIcon from "@mui/icons-material/Edit";

export const ActionEditPreview: TypeColumn[] = [
  {
    name: "preview",
    header: "Просмотр",
    maxWidth: 100,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <>
          <IconButton
            color="primary"
            onClick={() => console.log("Просмотр", data.outNumber)}
          >
            <PageviewIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => console.log("Просмотр", data.outNumber)}
          >
            <EditIcon />
          </IconButton>
        </>
      );
    },
  },
];
