import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import React from "react";
import "@inovua/reactdatagrid-community/index.css";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { dataSource } from "../../MOCK/data";
import { filterValue } from "../../components/Grid/InFilter";
import { columns } from "../../components/Grid/InColumns";

const Incoming = () => {
  const gridStyle = { minHeight: "100%" };

  return (
    <Stack>
      <Box>
        <Button> Создать письмо </Button>
      </Box>
      <Box height={"85vh"} sx={{ mt: 2 }}>
        <ReactDataGrid
          idProperty="id"
          columns={columns}
          dataSource={dataSource}
          style={gridStyle}
          sortable={true}
          filterable={true}
          defaultFilterValue={filterValue}
          showEmptyRows={false}
          // onColumnFilterValueChange={({ filterValue }) => {
          //   console.log(filterValue);
          // }}
          groupBy={["date"]}
        />
      </Box>
    </Stack>
  );
};

export default Incoming;
