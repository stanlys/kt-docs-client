import { Box, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { formatBytes } from "react-dropzone-uploader";
import DocViewer, { PDFRenderer, PNGRenderer } from "react-doc-viewer";
import { IDocument } from "../../interfaces/letter";
import { useAppDispatch } from "../../store/hooks";
import { getLetter } from "../../api/letter";
import { API_ENDPOINTS } from "../../api/URL";

const INITIAL_STATE: IDocument = {
  _id: "",
  dateTime: new Date(),
  fileName: "",
  path: "",
  size: 0,
};

const FileList = () => {
  const a = formatBytes(10);
  const [docs, setDocs] = useState<IDocument>(INITIAL_STATE);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(getLetter)
  }, []);
  const MOCK_DOCS = [
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-213759.pdf` },
  ];
  return (
    <Box>
      <List></List>
      <DocViewer
        documents={MOCK_DOCS}
        pluginRenderers={[PDFRenderer, PNGRenderer]}
      />
    </Box>
  );
};

export default FileList;
