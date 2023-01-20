import ListSubheader from "@mui/material/ListSubheader";
import MenuButton from "./MenuButton";

import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import OutboxIcon from "@mui/icons-material/Outbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import { ADDITIONAL_MENU, MAIN_MENU } from "./menu";

export const mainListItems = (
  <>
    <ListSubheader component="div" inset>
      Реестры
    </ListSubheader>
    {MAIN_MENU.map(({ caption, icon, link }) => (
      <MenuButton caption={caption} link={link} icon={icon} />
    ))}
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Дополнения
    </ListSubheader>
    {ADDITIONAL_MENU.map(({ caption, link, icon }) => (
      <MenuButton caption={caption} link={link} icon={icon} />
    ))}
  </>
);
