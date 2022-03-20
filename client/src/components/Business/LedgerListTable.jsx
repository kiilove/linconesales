import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";
import { ledgerList } from "../Datas/compData";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LedgerListTable = () => {
  const [rowColor, setRowColor] = useState("");
  return (
    <Container>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: grey[200] }}>
              <TableCell width={"2%"} align={"center"}>
                No.
              </TableCell>
              <TableCell width={"8%"} align={"center"}>
                거래일자
              </TableCell>
              <TableCell width={"5%"} align={"center"}>
                거래구분
              </TableCell>
              <TableCell width={"20%"}>거래처명</TableCell>
              <TableCell width={"28%"}>품명</TableCell>
              <TableCell width={"6%"} align={"right"}>
                단가
              </TableCell>
              <TableCell width={"6%"} align={"center"}>
                수량
              </TableCell>
              <TableCell width={"8%"} align={"right"}>
                합계
              </TableCell>
              <TableCell width={"8%"} align={"right"}>
                미수금
              </TableCell>
              <TableCell width={"8%"} align={"center"}>
                비고
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ledgerList.map((item, index) => (
              <>
                {item.type === "income" ? (
                  <TableRow>
                    <TableCell align={"center"}>{item.id}</TableCell>
                    <TableCell align={"center"}>{item.date}</TableCell>
                    <TableCell align={"center"}>
                      {item.type === "income" ? "매입" : "매출"}
                    </TableCell>
                    <TableCell>{item.compName}</TableCell>
                    <TableCell>{item.modelName}</TableCell>
                    <TableCell align={"right"}>
                      {item.cost.toLocaleString()}
                    </TableCell>
                    <TableCell align={"center"}>
                      {item.amount.toLocaleString()}
                    </TableCell>
                    <TableCell align={"right"}>
                      {item.total.toLocaleString()}
                    </TableCell>
                    <TableCell align={"right"}>
                      {item.receivable.toLocaleString()}
                    </TableCell>
                    <TableCell align={"center"}></TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell align={"center"}>{item.id}</TableCell>
                    <TableCell align={"center"}>{item.date}</TableCell>
                    <TableCell align={"center"}>
                      {item.type === "income" ? "매입" : "매출"}
                    </TableCell>
                    <TableCell>{item.compName}</TableCell>
                    <TableCell>{item.modelName}</TableCell>
                    <TableCell align={"right"}>
                      {item.cost.toLocaleString()}
                    </TableCell>
                    <TableCell align={"center"}>
                      {item.amount.toLocaleString()}
                    </TableCell>
                    <TableCell align={"right"}>
                      {item.total.toLocaleString()}
                    </TableCell>
                    <TableCell align={"right"}>
                      {item.receivable.toLocaleString()}
                    </TableCell>
                    <TableCell align={"center"}></TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LedgerListTable;
