import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "styled-components";
import ClientListCard from "../components/clients/ClientListCard";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
import MaketingDetail from "../components/marketing/MarketingDetail";
import TopMenu from "../components/TopMenu";

const Contianer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%auto;
  height: 100vh;
`;

const LeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 65px;
  height: 100%;
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  box-shadow: 0 4px 4px -4px ${grey[400]};
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const isLogin = false;
const Home = (props) => {
  return (
    <Contianer>
      <Stack>
        <TopMenu />
      </Stack>
      <Stack margin={2}>{props.child}</Stack>
    </Contianer>
  );
};

export default Home;
