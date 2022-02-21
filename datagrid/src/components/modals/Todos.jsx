import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Tooltip } from "@mui/material";
import { blue, blueGrey, green, grey } from "@mui/material/colors";
import styled from "styled-components";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import {
  Canvas,
  CloseButton,
  CloseWrapper,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";
import {
  faBookmark as fsBookmark,
  faThumbsUp as fsThumbsUp,
  faThumbsDown as fsThumbsDown,
  faClock as fsClock,
  faCheckCircle as fsCheckCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  faThumbsUp as frThumbsUp,
  faBookmark as frBookmark,
  faThumbsDown as frThumbsDown,
  faClock as frClock,
  faCheckCircle as frCheckCircle,
} from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 560px;
  max-height: 100%;
`;
const InfoCheckDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap !important;
  text-align: center;
  padding: 10px 0px;
`;
const DatePickerBox = styled(DatePicker)`
  background-color: ${blue[300]};
  width: 85%;
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 5px;
`;

const Todos = () => {
  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <Container>
      <Canvas style={{ paddingTop: "0px" }}>
        <CloseWrapper>
          <Tooltip title="닫기">
            <CloseButton src="/img/windowClose.png" />
          </Tooltip>
        </CloseWrapper>
        <ComponentHeaderWrapper style={{ paddingBottom: "0px" }}>
          <ComponentHeaderTitle color={blue[500]}>
            할일추가
          </ComponentHeaderTitle>
        </ComponentHeaderWrapper>
        <ComponentBodyWrapper
          style={{ flexDirection: "column", flexWrap: "wrap" }}
        >
          <InfoCheckDate>
            <TextField variant="outlined" sx={{ width: "90%" }} />
          </InfoCheckDate>
          <InfoCheckDate>
            <DatePickerBox
              locale="ko"
              showTimeSelect
              timeFormat="p"
              timeIntervals={5}
              selected={startDate}
              dateFormat="yyyy년 MM월 dd일 EE요일 a hh:mm"
              onChange={(date) => setStartDate(date)}
              checked={checked}
            />
          </InfoCheckDate>
        </ComponentBodyWrapper>
      </Canvas>
    </Container>
  );
};

export default Todos;
