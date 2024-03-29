import {
  faFileExcel,
  faKeyboard,
  faRedo,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { green, grey, orange, red } from "@mui/material/colors";
import { PageHeader, Descriptions } from "antd";

import {
  CircularProgress,
  Fade,
  Button,
  Stack,
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

const HeaderWrapper = styled.div`
  padding: 14px;
  background-color: ${grey[200]};
`;

const SearchIcon = <FontAwesomeIcon icon={faSearch} />;
const ExcelIcon = (
  <FontAwesomeIcon icon={faFileExcel} style={{ marginRight: 10 }} />
);
const KeyboardIcon = (
  <FontAwesomeIcon icon={faKeyboard} style={{ marginRight: 10 }} />
);
const Redo = <FontAwesomeIcon icon={faRedo} />;

const ClientCompList = () => {
  const [openNewComp, setOpenNewComp] = useState(false);

  const handleOpenNewComp = () => setOpenNewComp(true);
  const handleCloseNewComp = () => setOpenNewComp(false);
  return (
    <Container>
      <Stack>
        <HeaderWrapper>
          <PageHeader
            ghost={false}
            title="고객사 목록"
            subTitle="고객사 목록을 확인할 수 있으며, 세부 내용을 편집할 수 있습니다."
            extra={[
              <Button
                variant="outlined"
                disableElevation
                color="primary"
                startIcon={Redo}
                sx={{ marginLeft: "10px", height: "40px" }}
              >
                새로고침
              </Button>,
              <Button
                variant="outlined"
                disableElevation
                color="secondary"
                startIcon={KeyboardIcon}
                sx={{ marginLeft: "10px", height: "40px" }}
                onClick={handleOpenNewComp}
              >
                간편등록
              </Button>,
              <Button
                variant="outlined"
                disableElevation
                color="success"
                startIcon={ExcelIcon}
                sx={{ marginLeft: "10px", height: "40px" }}
              >
                엑셀등록
              </Button>,
            ]}
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="총 고객사 수">1,234</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </HeaderWrapper>
      </Stack>
      <Canvas>
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
