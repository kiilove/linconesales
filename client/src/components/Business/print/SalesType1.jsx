import {
  Stack,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { grey, blueGrey } from "@mui/material/colors";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 21cm;
  min-height: 29.7cm;
  padding: 40px;
  margin: 1cm auto;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const MainTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const MainTitleParts = styled.div`
  display: flex;
  flex: 1;
  margin: 10px;
`;

const MainTitleText = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 30px;
  font-weight: 300;
  color: ${blueGrey[700]};
`;

const SumTitleText = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: ${blueGrey[700]};
`;

const SumContentText = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 13px;
  font-weight: 300;
  color: ${blueGrey[600]};
`;

const SumCellStyle = {
  border: `1px solid ${blueGrey[200]}`,
};

const TableBorderBox = styled.div`
  border: 1px solid ${blueGrey[100]};
`;
const SalesType1 = () => {
  return (
    <Container>
      <Stack width={"100%"}>
        <div style={{ height: "4px", backgroundColor: blueGrey[100] }}></div>
        <MainTitleWrapper>
          <MainTitleParts>
            <MainTitleText>거래명세서</MainTitleText>
          </MainTitleParts>
          <MainTitleParts
            style={{
              justifyContent: "flex-end",
              flexDirection: "column",
              alignItems: "flex-start",
              color: blueGrey[500],
              height: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: 14, fontWeight: "light", marginBottom: "13px" }}
            >
              문서번호 : 20220301-001
            </Typography>
          </MainTitleParts>
          <MainTitleParts
            style={{
              justifyContent: "flex-end",
              flexDirection: "column",
              alignItems: "flex-end",
              color: blueGrey[500],
              height: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: 14, fontWeight: "light", marginBottom: "13px" }}
            >
              작성일자 : 2022년 3월 1일
            </Typography>
          </MainTitleParts>
        </MainTitleWrapper>
        <div style={{ height: "1px", backgroundColor: blueGrey[100] }}></div>
      </Stack>
      <Stack width={"100%"} direction={"row"} spacing={2}>
        <Box width={"40%"}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center" height={"74px"}>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <Typography variant="h6">(주)이루온아이앤에스</Typography>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 3,
                        }}
                      >
                        귀하
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
        <Box width={"60%"}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="right">
                    제이앤코어제이앤코어제이앤 | 854-16-00126 | 대표: 김진배
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">
                    경기 안양 동안 엘에스로 142 금정역SKV1 803호
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
      <Stack direction={"row"} mt={1.5} width={"100%"}>
        <TableContainer component={TableBorderBox}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={SumCellStyle}>
                  <SumTitleText style={{ justifyContent: "center" }}>
                    거래일자
                  </SumTitleText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumTitleText style={{ justifyContent: "right" }}>
                    미수금액
                  </SumTitleText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumTitleText style={{ justifyContent: "right" }}>
                    공급가액
                  </SumTitleText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumTitleText style={{ justifyContent: "right" }}>
                    세액
                  </SumTitleText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumTitleText style={{ justifyContent: "right" }}>
                    합계금액
                  </SumTitleText>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={SumCellStyle}>
                  <SumContentText style={{ justifyContent: "center" }}>
                    2022-03-01
                  </SumContentText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumContentText style={{ justifyContent: "right" }}>
                    0
                  </SumContentText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumContentText style={{ justifyContent: "right" }}>
                    1,000,000
                  </SumContentText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumContentText style={{ justifyContent: "right" }}>
                    100,000
                  </SumContentText>
                </TableCell>
                <TableCell sx={SumCellStyle}>
                  <SumContentText style={{ justifyContent: "right" }}>
                    1,100,000
                  </SumContentText>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
};

export default SalesType1;
