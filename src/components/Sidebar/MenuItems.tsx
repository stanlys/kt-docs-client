import ListSubheader from "@mui/material/ListSubheader";
import MenuButton from "./MenuButton";
import { ADDITIONAL_MENU, MAIN_MENU, SETTING_MENU } from "./menu";

export const mainListItems = (
  <>
    <ListSubheader component="div" inset>
      Реестры
    </ListSubheader>
    {MAIN_MENU.map(({ caption, icon, link }) => (
      <MenuButton caption={caption} link={link} icon={icon} key={caption} />
    ))}
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Дополнения
    </ListSubheader>
    {ADDITIONAL_MENU.map(({ caption, link, icon }) => (
      <MenuButton caption={caption} link={link} icon={icon} key={caption} />
    ))}
  </>
);

export const settingList = (
  <>
    <ListSubheader component="div" inset>
      Настройки
    </ListSubheader>
    {SETTING_MENU.map(({ caption, link, icon }) => (
      <MenuButton caption={caption} link={link} icon={icon} key={caption} />
    ))}
  </>
);
