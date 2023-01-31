import ReactDataGrid from "@inovua/reactdatagrid-community";
import {
  TypeColumn,
  TypeDataSource,
  TypeFilterValue,
} from "@inovua/reactdatagrid-community/types";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { POSTLETTER_COLUMN_ORDER } from "./Letter/LetterColumns";

interface LettersList {
  columns: TypeColumn[];
  data: TypeDataSource;
  filter: TypeFilterValue;
  style?: {
    [key: string]: string | number;
  };
  columnOrderDefault: Array<string>;
  LocalStorageKey: string;
}

const LettersList: React.FC<LettersList> = ({
  columns,
  data,
  filter,
  style,
  columnOrderDefault,
  LocalStorageKey,
}) => {
  const [columnOrder, setColumnOrder] = useState<string[]>(columnOrderDefault);

  const loadColumnOrder = () => {
    const columns =
      localStorage.getItem(LocalStorageKey) === null
        ? columnOrderDefault
        : JSON.parse(localStorage.getItem(LocalStorageKey) as string);
    setColumnOrder(columns);
  };

  const saveColumnOrder = (columns: string[]) => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(columns));
    setColumnOrder(columns);
  };

  useEffect(() => {
    loadColumnOrder();
  }, []);

  return (
    <Box height={"85vh"} sx={{ mt: 2 }}>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        columnOrder={columnOrder}
        dataSource={data}
        style={style}
        sortable={true}
        filterable={true}
        defaultFilterValue={filter}
        showEmptyRows={false}
        groupBy={["date"]}
        pagination={"local"}
        onColumnOrderChange={saveColumnOrder}
      />
    </Box>
  );
};

export default LettersList;
