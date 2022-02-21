import {
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { lightGreen, orange } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 15%;
`;

const SearchWrapper = styled.div`
  display: flex;
  height: 60px;
  width: 80%;
  justify-content: center;
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
`;

const CompSearch = () => {
  return (
    <Container>
      <TitleWrapper>고객사검색</TitleWrapper>
      <SearchWrapper>
        <TextField variant="standard" sx={{ width: 400 }} />
        <FontAwesomeIcon icon={faSearch} />
      </SearchWrapper>
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
        <TableContainer sx={{ maxHeight: 200 }}>
          <Table>
            <TableHead>
              <TableRow
                align="center"
                style={{ backgroundColor: "whitesmoke", fontWeight: "700" }}
              >
                <TableCell
                  align="left"
                  width={"70%"}
                  style={{ fontWeight: 700 }}
                >
                  회사명
                </TableCell>
                <TableCell
                  align="center"
                  width={"30%"}
                  style={{ fontWeight: 700 }}
                >
                  사업자번호
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  align="left"
                  width={"70%"}
                  style={{ fontWeight: 500 }}
                >
                  (주)이루온
                </TableCell>
                <TableCell
                  align="center"
                  width={"30%"}
                  style={{ fontWeight: 500 }}
                >
                  123-45678-18
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ResultWrapper>
    </Container>
  );
};

export default CompSearch;
