import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import { blue, orange, purple } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import {
  Canvas,
  CloseButton,
  CloseWrapper,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 760px;
  max-height: 100%;
`;

const ActionWrapper = styled.div`
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
`;

const ActionGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const CreateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  min-height: 70px;
`;

const CreateInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 30px;
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
`;

function CreateClientCompany() {
  return (
    <Container>
      <Canvas>
        <ComponentHeaderWrapper style={{ paddingBottom: "0px" }}>
          <ComponentHeaderTitle color={purple[500]}>
            간편 고객사 등록
          </ComponentHeaderTitle>
        </ComponentHeaderWrapper>
        <ComponentBodyWrapper style={{ flexDirection: "column" }}>
          <ActionWrapper style={{ marginTop: "20px" }}>
            <ActionGroup style={{ justifyContent: "flex-start" }}>
              <Button variant="outlined" sx={{ mr: 1 }} color="secondary">
                저장 후 추가등록
              </Button>
            </ActionGroup>
            <ActionGroup style={{ justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{ mr: 1 }}
                disableElevation
                color="secondary"
              >
                저장 후 닫기
              </Button>
            </ActionGroup>
          </ActionWrapper>
          <CreateWrapper>
            <CreateInput style={{ marginTop: 10 }}>
              <TextField
                id="compNum"
                label="사업자등록번호"
                variant="standard"
                helperText="숫자만 입력하세요!"
                fullWidth
              />
            </CreateInput>
            <CreateInput>
              <TextField
                id="compName"
                label="회사명(고객명)"
                variant="standard"
                required
                helperText="반드시 입력해야합니다."
                fullWidth
                autoComplete="false"
              />
            </CreateInput>
            <CreateInput>
              <TextField
                id="compBoss"
                label="대표"
                variant="standard"
                fullWidth
                autoComplete="false"
              />
            </CreateInput>
            <CreateInput>
              <TextField
                id="compAddr"
                label="사업장주소"
                variant="standard"
                fullWidth
                autoComplete="false"
              />
            </CreateInput>
            <CreateInput
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <TextField
                id="compType"
                label="업태"
                variant="standard"
                sx={{ width: "300px" }}
              />
              <TextField
                id="compCate"
                label="종목"
                variant="standard"
                sx={{ width: "300px" }}
              />
            </CreateInput>
            <CreateInput
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="compCate"
                label="담당자 정보"
                variant="standard"
                sx={{ width: "300px" }}
              />
              <TextField
                id="compCate"
                label="세금계산서 발행 이메일"
                variant="standard"
                sx={{ width: "300px" }}
              />
            </CreateInput>
          </CreateWrapper>
          <ActionWrapper style={{ marginBottom: "20px" }}>
            <ActionGroup style={{ justifyContent: "flex-start" }}>
              <Button variant="outlined" sx={{ mr: 1 }} color="secondary">
                저장 후 추가등록
              </Button>
            </ActionGroup>
            <ActionGroup style={{ justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{ mr: 1 }}
                disableElevation
                color="secondary"
              >
                저장 후 닫기
              </Button>
            </ActionGroup>
          </ActionWrapper>
        </ComponentBodyWrapper>
      </Canvas>
    </Container>
  );
}

export default CreateClientCompany;
