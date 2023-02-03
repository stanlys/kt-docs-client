import React, { useEffect, useState } from "react";
import { Box, Button, Divider, IconButton } from "@mui/material";
import AddDelivery from "../Add/AddOrganization";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  deleteDeliveryOrganization,
  getAllDeliveryOrganization,
} from "../../../../store/Delivery/thunk";
import ClearIcon from "@mui/icons-material/Clear";

const ListDelivery = () => {
  const dispatch = useAppDispatch();
  const organization = useAppSelector((state) => state.deliveryOrganization);

  useEffect(() => {
    dispatch(getAllDeliveryOrganization());
  }, []);

  return (
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Наименование</TableCell>
              <TableCell align="center">Сайт</TableCell>
              <TableCell align="center">Телефон</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organization.organization.map((postman) => (
              <TableRow key={postman._id}>
                <TableCell align="left">
                  <IconButton
                    onClick={() => {
                      console.log("delete");
                      dispatch(deleteDeliveryOrganization(postman._id));
                    }}
                  >
                    <ClearIcon color="error" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">{postman.orgname} </TableCell>
                <TableCell align="center">{postman.website} </TableCell>
                <TableCell align="center">{postman.phone} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider orientation="vertical" />
      <AddDelivery />
    </Box>
  );
};

export default ListDelivery;
