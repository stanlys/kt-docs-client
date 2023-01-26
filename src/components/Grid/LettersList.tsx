import ReactDataGrid from "@inovua/reactdatagrid-community";
import {
  TypeColumn,
  TypeDataSource,
  TypeFilterValue,
} from "@inovua/reactdatagrid-community/types";
import { Box } from "@mui/material";
import React from "react";

interface LettersList {
  columns: TypeColumn[];
  data: TypeDataSource;
  filter: TypeFilterValue;
  style?: {
    [key: string]: string | number;
  };
}

const LettersList: React.FC<LettersList> = ({
  columns,
  data,
  filter,
  style,
}) => {
  return (
    <Box height={"85vh"} sx={{ mt: 2 }}>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={data}
        style={style}
        sortable={true}
        filterable={true}
        defaultFilterValue={filter}
        showEmptyRows={false}
        groupBy={["date"]}
        pagination={"local"}
      />
    </Box>
  );
};

export default LettersList;
