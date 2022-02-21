import { Grid, Stack } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import { Box } from "@mui/system";
import styled from "styled-components";
import {
  Canvas,
  CanvasCustom,
  ComponentBodyWrapper,
  ComponentHeaderTitle,
  ComponentHeaderWrapper,
} from "../styles/Common";
import CompSearch from "./CompSearch";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Sales = () => {
  return (
    <Container>
      <Stack width={"100%"} mb={2}>
        <CanvasCustom>
          <ComponentHeaderWrapper>
            <ComponentHeaderTitle color={green[500]}>매출</ComponentHeaderTitle>
          </ComponentHeaderWrapper>
        </CanvasCustom>
      </Stack>
      <Stack width={"100%"}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <CanvasCustom>
              <CompSearch />
            </CanvasCustom>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Sales;
