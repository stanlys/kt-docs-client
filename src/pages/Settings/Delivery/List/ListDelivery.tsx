import React, { useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import AddDelivery from "../Add/AddOrganization";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListDelivery = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        </TableContainer>
      <Divider />
      <AddDelivery />
    </Box>
  );
};

export default ListDelivery;
