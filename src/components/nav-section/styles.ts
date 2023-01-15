// @mui
import { styled } from "@mui/material/styles";
import { ListItemIcon } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";

// ----------------------------------------------------------------------

// export const StyledNavItem = styled((props) => (
//   <ListItemButton disableGutters {...props} />
// ))(({ theme }) => ({
//   ...theme.typography.body2,
//   height: 48,
//   position: "relative",
//   textTransform: "capitalize",
//   color: theme.palette.text.secondary,
//   borderRadius: theme.shape.borderRadius,
// }));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledNavItem = styled(ListItemButton)({
  // ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  // color: theme.palette.text.secondary,
  // borderRadius: theme.shape.borderRadius,
});
