import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { Box, Button, Checkbox, FormControl, FormLabel } from "@mui/material";
import style from "./ButtonUpload.module.scss";

interface ButtonUploadProps {
  fileSize: number;
  onChange: (e: React.ChangeEvent) => void;
  caption: string;
  uploadFileExt: string;
}

const ButtonUpload: React.FC<ButtonUploadProps> = ({
  fileSize,
  caption,
  onChange,
  uploadFileExt,
}) => {
  return (
    <Box className={style.upload}>
      <FormLabel>{caption} </FormLabel>
      <Checkbox
        checked={fileSize == 0 ? false : true}
        size="medium"
        icon={<CloudDownloadIcon />}
        checkedIcon={<CloudDoneIcon />}
      />
      <Button
        variant={fileSize == 0 ? "outlined" : "contained"}
        component="label"
      >
        {fileSize == 0 ? "Загрузить" : "Загружено"}
        <input
          hidden
          accept={uploadFileExt}
          name={"file"}
          type="file"
          required
          onChange={onChange}
        />
      </Button>
    </Box>
  );
};

export default ButtonUpload;
