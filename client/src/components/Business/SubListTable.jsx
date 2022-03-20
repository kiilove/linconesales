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

const TableRowStyle = {
  "&:hover": { cursor: "pointer" },
};

const SubListTable = (props) => {
  return (
    <Container>
      <TableContainer>
        <Table size={props.size}>
          <TableHead>
            <TableRow>
              {props.header.map((item, index) => (
                <TableCell
                  sx={TableTitleStyle}
                  width={props.width[index]}
                  id={index}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.context.map((item, index) => (
              <TableRow
                id={index}
                hover
                onClick={() => console.log(item)}
                sx={TableRowStyle}
              >
                <TableCell>{item.compName}</TableCell>
                <TableCell>{item.compNum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SubListTable;
