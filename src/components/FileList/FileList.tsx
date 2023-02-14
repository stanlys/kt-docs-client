import { Box, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { formatBytes } from "react-dropzone-uploader";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { IDocument } from "../../interfaces/letter";
import { useAppDispatch } from "../../store/hooks";
import { getLetter } from "../../api/letter";
import { API_ENDPOINTS } from "../../api/URL";
import { useLocation } from "react-router";

const INITIAL_STATE: IDocument = {
  _id: "",
  dateTime: new Date(),
  fileName: "",
  path: "",
  size: 0,
};

const MyNoRenderer = ({
  document,
  fileName,
}: {
  document: any;
  fileName: string;
}) => {
  const fileText = fileName || document?.fileType || "";
  console.log("noRender-", fileText);
  if (fileText) {
    return <div>No Renderer Error! ({fileText})</div>;
  }

  return <div>No Renderer Error!</div>;
};

const MyLoadingRenderer = ({ document, fileName }) => {
  const fileText = fileName || document?.fileType || "";
  const ext = fileText.split(".").pop();
  if (ext === "doc" || ext === "docx")
    return <Typography> Документ Word </Typography>;
  console.log("loading-", fileText);

  if (fileText) {
    return <div>Loading Renderer ({fileText})...</div>;
  }

  return <div>Loading Renderer...</div>;
};

const FileList = () => {
  const a = formatBytes(10);
  const [docs, setDocs] = useState<IDocument>(INITIAL_STATE);

  const { state } = useLocation();
  console.log(state.objectId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(getLetter)
  }, []);
  const MOCK_DOCS = [
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164212.pdf` },
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164547.pdf` },
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164222.doc` },
    { uri: `${API_ENDPOINTS.BASE}/2023/2023-02-13-164554.xlsx` },
  ];
  return (
    <Box>
      <List></List>
      <DocViewer
        documents={MOCK_DOCS}
        pluginRenderers={DocViewerRenderers}
        config={{
          noRenderer: {
            overrideComponent: MyNoRenderer,
          },
          loadingRenderer: {
            overrideComponent: MyLoadingRenderer,
            showLoadingTimeout: false, // false if you want to disable or number to provide your own value (ms)
          },
        }}
      />
    </Box>
  );
};

export default FileList;
