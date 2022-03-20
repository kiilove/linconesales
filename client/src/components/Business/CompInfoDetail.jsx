import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./BusinessStyles";
import { grey, lightBlue } from "@mui/material/colors";
import CompInfoTable from "./CompListTable";
import { CompList } from "../Datas/compData";

const compInfoDummy = {
  id: 1,
  compName: "(주)이루온",
  compNum: "1234512345",
  compBoss: "이승구",
  compAddr: "경기도 성남시 대왕판교로 905호(삼평동, 유스페이스1)",
  compType: "서비스업외",
  compCate: "소프트웨어 개발외",
  compManager: [
    {
      id: 1,
      name: "정종화",
      position: "팀장님",
      telNum: "07012341234",
      mobileNum: "01055555555",
      email: "jjh0924@eluon.com",
    },
    {
      id: 2,
      name: "백인수",
      position: "부장님",
      telNum: "07012341235",
      mobileNum: "01055555556",
      email: "isback@eluon.com",
    },
    {
      id: 3,
      name: "조경미",
      position: "차장님",
      telNum: "07012341236",
      mobileNum: "01055555557",
      email: "kmcho@eluon.com",
    },
  ],
};

const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CellTitleStyle = {
  backgroundColor: lightBlue[100],
  width: "8rem",
  maxWidth: "160px",
};

const initialClientCompInfo = {
  id: 0,
  compName: "",
  compNum: "",
  compBoss: "",
  compAddr: "",
  compType: "",
  compCate: "",
  compManager: [],
};
const CompInfoDetail = (props) => {
  const [clientCompInfo, setClientCompInfo] = useState(initialClientCompInfo);
  return (
    <Container>
      <TableContainer>
        <Table sx={{ border: 1, borderColor: grey[300] }} size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={CellTitleStyle}>
                <InfoTitle>사업자등록번호</InfoTitle>
              </TableCell>
              <TableCell>
                <InfoContent>{clientCompInfo.compNum}</InfoContent>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={CellTitleStyle}>
                <InfoTitle>상호(법인명)</InfoTitle>
              </TableCell>
              <TableCell>
                <InfoContent>{clientCompInfo.compName}</InfoContent>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={CellTitleStyle}>
                <InfoTitle>대표</InfoTitle>
              </TableCell>
              <TableCell>
                <InfoContent>{clientCompInfo.compBoss}</InfoContent>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={CellTitleStyle}>
                <InfoTitle>주소</InfoTitle>
              </TableCell>
              <TableCell>
                <InfoContent>{clientCompInfo.compAddr}</InfoContent>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={CellTitleStyle}>
                <InfoTitle>업태</InfoTitle>
              </TableCell>
              <TableCell>
                <InfoContent>{clientCompInfo.compType}</InfoContent>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={CellTitleStyle}>
                <InfoTitle>종목</InfoTitle>
              </TableCell>
              <TableCell>
                <InfoContent>{clientCompInfo.compCate}</InfoContent>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colspan={2}>
                <CompInfoTable />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompInfoDetail;
