import ReactDataGrid from "@inovua/reactdatagrid-community";
import {
  TypeColumn,
  TypeDataSource,
  TypeFilterValue,
} from "@inovua/reactdatagrid-community/types";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { COLUMN_ORDER } from "./Letter/LetterColumns";

interface LettersList {
  columns: TypeColumn[];
  data: TypeDataSource;
  filter: TypeFilterValue;
  style?: {
    [key: string]: string | number;
  };
  name: string;
}

const LettersList: React.FC<LettersList> = ({
  columns,
  data,
  filter,
  style,
  name,
}) => {
  const [columnOrder, setColumnOrder] = useState<string[]>(COLUMN_ORDER);

  const loadColumnOrder = () => {
    const columns =
      localStorage.getItem(name) === null
        ? COLUMN_ORDER
        : JSON.parse(localStorage.getItem(name) as string);
    setColumnOrder(columns);
  };

  const saveColumnOrder = (columns: string[]) => {
    localStorage.setItem(name, JSON.stringify(columns));
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
