import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useAppDispatch } from "../../../store/hooks";
import { Link } from "react-router-dom";

interface ActionDeleteButtonProps {
  website: string;
}

const ActionLinkButton: React.FC<ActionDeleteButtonProps> = ({ website }) => {
  const dispatch = useAppDispatch();

  return (
    <Link to={website}>
      <ShareIcon color="success" />
    </Link>
  );
};

export const ActionGoToWebsite: TypeColumn[] = [
  {
    name: "preview",
    header: "Управление",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      console.log(data);
      return <ActionLinkButton website={data.website} />;
    },
  },
];
