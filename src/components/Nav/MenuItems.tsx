import ListSubheader from "@mui/material/ListSubheader";
import MenuButton from "./MenuButton";

import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import OutboxIcon from "@mui/icons-material/Outbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RequestPageIcon from "@mui/icons-material/RequestPage";

export const mainListItems = (
  <>
    <MenuButton caption="Исходящие" link="/" icon={<OutboxIcon />} />
    <MenuButton caption="Входящие" link="out" icon={<MoveToInboxIcon />} />
    <MenuButton caption="Почта" link="/" icon={<LocalShippingIcon />} />
    <MenuButton caption="Договора" link="/" icon={<RequestPageIcon />} />
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Дополнения
    </ListSubheader>
    <MenuButton caption="Реестр адресов" link="/" icon={<OutboxIcon />} />
    <MenuButton caption="Курьеры" link="/" icon={<OutboxIcon />} />
  </>
);
