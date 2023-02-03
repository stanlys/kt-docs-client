import React, { useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import AddDelivery from "../Add/AddOrganization";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const ListDelivery = () => {
  const dispatch = useAppDispatch();
  const organization = useAppSelector((state) => state.deliveryOrganization);

  return (
    <Box>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Управление</TableCell>
              <TableCell align="right">Наименование</TableCell>
              <TableCell align="right">Сайт</TableCell>
              <TableCell align="right">Телефон</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organization.organization.map((postman) => (
              <TableRow>
                <TableCell align="center">
                  <Button>Удалить</Button>
                </TableCell>
                <TableCell align="right">{postman.orgname} </TableCell>
                <TableCell align="right">{postman.website} </TableCell>
                <TableCell align="right">{postman.phone} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <AddDelivery />
    </Box>
  );
};

export default ListDelivery;
