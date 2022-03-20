import {
  faFileExcel,
  faKeyboard,
  faRedo,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  CircularProgress,
  Fade,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../config/base";

import CreateClientCompany from "../modals/CreateClientCompany";

import SpinProgress from "../SpinProgress";
import {
  Canvas,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";
import CompTable from "./CompTable";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ListActionWrapper = styled.div`
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const ListActionBox = styled.div`
  height: 50px;
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  flex: 1;
`;

const SearchIcon = <FontAwesomeIcon icon={faSearch} />;
const ExcelIcon = <FontAwesomeIcon icon={faFileExcel} />;
const KeyboardIcon = <FontAwesomeIcon icon={faKeyboard} />;
const Redo = <FontAwesomeIcon icon={faRedo} />;

const ClientCompList = () => {
  const [openNewComp, setOpenNewComp] = useState(false);

  const handleOpenNewComp = () => setOpenNewComp(true);
  const handleCloseNewComp = () => setOpenNewComp(false);
  return (
    <Container>
      <Canvas>
        <ComponentHeaderWrapper>
          <ComponentHeaderTitle color={indigo[500]}>
            고객사 목록
          </ComponentHeaderTitle>
          <ListActionWrapper style={{ justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              disableElevation
              color="primary"
              startIcon={Redo}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              새로고침
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              startIcon={KeyboardIcon}
              sx={{ marginLeft: "10px", height: "40px" }}
              onClick={handleOpenNewComp}
            >
              간편등록
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="success"
              startIcon={ExcelIcon}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              엑셀등록
            </Button>
            <Modal open={openNewComp} onClose={handleCloseNewComp}>
              <CreateClientCompany />
            </Modal>
          </ListActionWrapper>
        </ComponentHeaderWrapper>
        <ListActionWrapper>
          <ListActionBox>
            <RadioGroup row name="row-radio-buttons-group">
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="전체보기"
              />
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="최근작업"
              />
              <FormControlLabel
                value="ing"
                control={<Radio />}
                label="매출처"
              />
              <FormControlLabel
                value="stop"
                control={<Radio />}
                label="매입처"
              />
            </RadioGroup>
          </ListActionBox>
          <ListActionBox style={{ justifyContent: "flex-end" }}>
            <TextField size="small" label="검색" sx={{ width: "300px" }} />
            <Button
              variant="outlined"
              startIcon={SearchIcon}
              sx={{ marginLeft: "10px", height: "40px" }}
            >
              검색
            </Button>
          </ListActionBox>
        </ListActionWrapper>
        <ComponentBodyWrapper>
          <ListWrapper>
            <CompTable />
          </ListWrapper>
        </ComponentBodyWrapper>
      </Canvas>
    </Container>
  );
};

export default ClientCompList;
