import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import { Container } from "./BusinessStyles";

const TableTitleStyle = {
  backgroundColor: "whitesmoke",
  fontWeight: "bold",
};

const CompListTable = () => {
  return (
    <Container>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={TableTitleStyle} width={"60%"}>
                회사명
              </TableCell>
              <TableCell sx={TableTitleStyle} width={"40%"}>
                사업자번호
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>(주)이루온아이앤에스</TableCell>
              <TableCell>1234-56-12345</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompListTable;
