import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import {
  faEdit,
  faTrashAlt,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import { blue, green, grey } from "@mui/material/colors";
import { CompList } from "../Datas/compData";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
`;
const Dummy = CompList;
const CompTable = () => {
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  return (
    <Container>
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow
              align="center"
              style={{ backgroundColor: "whitesmoke", fontWeight: "700" }}
            >
              <TableCell align="center" width={10} style={{ fontWeight: 700 }}>
                No.
              </TableCell>
              <TableCell
                align="center"
                width={"25%"}
                style={{ fontWeight: 700 }}
              >
                회사명
              </TableCell>
              <TableCell
                align="center"
                width={"32%"}
                style={{ fontWeight: 700 }}
              >
                주소
              </TableCell>
              <TableCell
                align="center"
                width={"10%"}
                style={{ fontWeight: 700 }}
              >
                대표
              </TableCell>
              <TableCell
                align="center"
                width={"15%"}
                style={{ fontWeight: 700 }}
              >
                사업자번호
              </TableCell>
              <TableCell
                align="center"
                width={"13%"}
                style={{ fontWeight: 700 }}
              >
                기능
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Dummy.map((item, index) => (
              <TableRow>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell>{item.compName}</TableCell>
                <TableCell>{item.compAddr}</TableCell>
                <TableCell align="center">{item.compBoss}</TableCell>
                <TableCell align="center">{item.compNum}</TableCell>
                <TableCell align="center">
                  <Box display={"flex"} justifyContent={"space-around"}>
                    <FontAwesomeIcon
                      icon={faFileInvoiceDollar}
                      style={{ fontSize: 20, color: green[600] }}
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: 20, color: blue[600] }}
                    />
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ fontSize: 20, color: grey[600] }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        display={"flex"}
        marginTop={3}
        justifyContent={"center"}
        alignItems={"center"}
        height={50}
      >
        <Stack spacing={2}>
          <Pagination count={7} shape="rounded" />
        </Stack>
      </Box>
    </Container>
  );
};

export default CompTable;
