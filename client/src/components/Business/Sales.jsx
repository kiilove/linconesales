import { Grid, Stack } from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";

import { PageHeader, Descriptions } from "antd";
import { CanvasCustom } from "../styles/Common";
import CompInfo from "./CompInfo";
import CompSearch from "./CompSearch";
import SalesInput from "./SalesInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  padding: 14px;
  background-color: ${grey[200]};
`;
const Sales = (props) => {
  const [compList, setCompList] = useState([]);

  // useEffect(() => {
  //   const resultCompList = compList.filter((item) => item);
  // }, []);

  return (
    <Container>
      <Stack width={"100%"} mb={2}>
        <HeaderWrapper>
          <PageHeader
            ghost={false}
            title="매출 등록"
            subTitle="매출 데이터를 입력 합니다. 작성된 데이터는 거래명세서를 자동 생성합니다."
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="문서번호">
                SI220306-001
              </Descriptions.Item>
              <Descriptions.Item label="공급자">제이앤코어</Descriptions.Item>
              <Descriptions.Item label="작성자">김진배 팀장</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </HeaderWrapper>
      </Stack>
      <Stack width={"100%"} mb={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <CanvasCustom>
              <CompSearch />
            </CanvasCustom>
          </Grid>
          <Grid item xs={12} md={7}>
            <CanvasCustom>
              <CompInfo compNum={props.compInfo} />
            </CanvasCustom>
          </Grid>
          <Grid item xs={12}>
            <CanvasCustom>
              <SalesInput />
            </CanvasCustom>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Sales;
