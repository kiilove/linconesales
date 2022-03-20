import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PageHeader, Radio, DatePicker, Input, Tabs } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Canvas } from "../styles/Common";
import LedgerListTable from "./LedgerListTable";

const { RangePicker } = DatePicker;
const { Search } = Input;
const { TabPane } = Tabs;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  padding: 14px;
  background-color: ${grey[200]};
`;

const HeaderActionWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ActionPartsWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ActionPartsTitle = styled.span`
  font-size: 14px;
`;

const TabsTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
`;
const Ledger = () => {
  const [saleType, setSaleType] = useState("all");
  const [searchDate, setSearchDate] = useState([]);

  const handleRange = (date, dateString) => {
    setSearchDate(dateString);
  };

  return (
    <Container>
      <Stack width={"100%"}>
        <HeaderWrapper>
          <PageHeader
            ghost={false}
            title="거래원장"
            subTitle="매입/매출 기준 거래 내역을 확인할 수 있습니다."
          >
            <HeaderActionWrapper>
              <ActionPartsWrapper>
                <ActionPartsTitle style={{ marginRight: "10px" }}>
                  거래종류
                </ActionPartsTitle>
                <Radio.Group
                  onChange={(e) => {
                    setSaleType(e.target.value);
                  }}
                  defaultValue={"all"}
                >
                  <Radio value="all">전체</Radio>
                  <Radio value="income">매입</Radio>
                  <Radio value="outcome">매출</Radio>
                </Radio.Group>
              </ActionPartsWrapper>
              <ActionPartsWrapper>
                <ActionPartsTitle style={{ marginRight: "10px" }}>
                  기간선택
                </ActionPartsTitle>

                <RangePicker
                  autoComplete="off"
                  name="searchDate"
                  onChange={handleRange}
                />
              </ActionPartsWrapper>
              <ActionPartsWrapper>
                <ActionPartsTitle style={{ marginRight: "10px" }}>
                  고객사 검색
                </ActionPartsTitle>
                <Search
                  style={{ width: "100%", maxWidth: "450px" }}
                  allowClear
                />
              </ActionPartsWrapper>
            </HeaderActionWrapper>
          </PageHeader>
        </HeaderWrapper>
      </Stack>
      <Canvas>
        <Stack width={"100%"}>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<TabsTitle>일자별</TabsTitle>} key="1">
              <LedgerListTable />
            </TabPane>
            <TabPane tab={<TabsTitle>거래처별</TabsTitle>} key="2">
              <LedgerListTable />
            </TabPane>
            <TabPane tab={<TabsTitle>외상매입</TabsTitle>} key="3">
              <LedgerListTable />
            </TabPane>
            <TabPane tab={<TabsTitle>외상매출</TabsTitle>} key="4">
              <LedgerListTable />
            </TabPane>
          </Tabs>
        </Stack>
      </Canvas>
    </Container>
  );
};

export default Ledger;
