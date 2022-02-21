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
import { DataGrid, koKR, GridToolbar } from "@mui/x-data-grid";
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
  padding: 20px;
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

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

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
              variant="contained"
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
              건별등록
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
            <LoadingWrapper>
              {/* <Fade in={false} unmountOnExit>
                <CircularProgress width="100%" justifyContent="center" />
              </Fade> */}
            </LoadingWrapper>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </ListWrapper>
        </ComponentBodyWrapper>
      </Canvas>
    </Container>
  );
};

export default ClientCompList;
