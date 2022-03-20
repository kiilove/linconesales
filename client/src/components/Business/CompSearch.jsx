import {
  Alert,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import { Container, TitleWrapper } from "./BusinessStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { lightGreen, orange } from "@mui/material/colors";
import SubListTable from "./SubListTable";
import { useEffect, useState } from "react";
import { CompList } from "../Datas/compData";
import Inko from "inko";

const SearchWrapper = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const AlertWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const ResultWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const CompSearch = (props) => {
  const [compList, setCompList] = useState([]);
  const [filterdCompList, setFilteredCompList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [transKeyword, setTransKeyword] = useState("");
  const inko = new Inko();

  useEffect(() => {
    setCompList(() => CompList);
  }, []);

  useEffect(() => {
    setFilteredCompList(() =>
      compList.filter(
        (item) =>
          item.compName.includes(searchKeyword) ||
          item.compName.includes(inko.en2ko(searchKeyword)) ||
          item.compBoss.includes(searchKeyword) ||
          item.compBoss.includes(inko.en2ko(searchKeyword)) ||
          item.compNum.includes(searchKeyword)
      )
    );
    setTransKeyword(
      searchKeyword !== inko.en2ko(searchKeyword) && inko.en2ko(searchKeyword)
    );
  }, [searchKeyword]);

  return (
    <Container>
      <TitleWrapper>고객사 검색</TitleWrapper>
      <SearchWrapper>
        <TextField
          value={searchKeyword}
          variant="standard"
          sx={{ width: "100%" }}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} />
      </SearchWrapper>
      <AlertWrapper>
        <Alert severity="info" sx={{ width: "100%" }}>
          {transKeyword.length
            ? `"${transKeyword}" 키워드도 함께 검색합니다.`
            : "한영 자동 변환하여 검색합니다.(상호, 대표자 이름, 사업자등록번호 통합 검색)"}
        </Alert>
      </AlertWrapper>
      <FavoriteWrapper>
        <Box margin={1}>
          <Chip
            label="(주)이루온"
            variant="outlined"
            sx={{ color: lightGreen[700], fontWeight: 600 }}
          />
        </Box>
        <Box margin={1}>
          <Chip
            label="(주)이루온아이앤에스"
            variant="outlined"
            sx={{ color: lightGreen[700], fontWeight: 600 }}
          />
        </Box>
        <Box margin={1}>
          <Chip
            label="(주)이미지컴"
            variant="outlined"
            sx={{ color: orange[700], fontWeight: 600 }}
          />
        </Box>
        <Box margin={1}>
          <Chip
            label="트라이언소프트(주)"
            variant="outlined"
            sx={{ color: lightGreen[700], fontWeight: 600 }}
          />
        </Box>

        <Box margin={1}>
          <Chip
            label="(주)누비넷퍼스트"
            variant="outlined"
            sx={{ color: orange[700], fontWeight: 600 }}
          />
        </Box>
        <Box margin={1}>
          <Chip
            label="이지케어텍(주)"
            variant="outlined"
            sx={{ color: lightGreen[700], fontWeight: 600 }}
          />
        </Box>
        <Box margin={1}>
          <Chip
            label="(주)디지탈노뜨"
            variant="outlined"
            sx={{ color: orange[700], fontWeight: 600 }}
          />
        </Box>
      </FavoriteWrapper>
      <div>
        <Divider />
      </div>
      <ResultWrapper>
        <SubListTable
          header={["회사명", "사업자번호"]}
          context={filterdCompList}
          width={["65%", "35%"]}
          target="compInfo"
          size="small"
        />
      </ResultWrapper>
    </Container>
  );
};

export default CompSearch;
