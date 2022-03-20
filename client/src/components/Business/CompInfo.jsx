import React from "react";
import styled from "styled-components";

import { Container, TitleWrapper } from "./BusinessStyles";
import CompInfoDetail from "./CompInfoDetail";

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CompInfo = (props) => {
  return (
    <Container>
      <TitleWrapper>고객사 정보</TitleWrapper>
      <InfoWrapper>
        <CompInfoDetail compInfo={props.compInfo} />
      </InfoWrapper>
    </Container>
  );
};

export default CompInfo;
