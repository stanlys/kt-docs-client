import SvgIcon from "@mui/material/SvgIcon/SvgIcon";
import { Box, TextField } from "@mui/material";
import React from "react";

interface EntryField {
  icon: React.ElementType;
  label: string;
  name: string;
  isError: boolean;
  error: string;
  value: string;
  onChange: () => void;
}

const EntryField: React.FC<EntryField> = ({
  label,
  icon,
  value,
  name,
  isError,
  error,
  onChange,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SvgIcon
        component={icon}
        inheritViewBox
        sx={{ color: "action.active", mr: 1, my: 0.5 }}
      />
      <TextField
        label={label}
        variant="standard"
        name={name}
        fullWidth
        value={value}
        onChange={onChange}
        error={isError}
        helperText={error}
      />
    </Box>
  );
};

export default EntryField;
