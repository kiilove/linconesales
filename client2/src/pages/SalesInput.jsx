import styled from "styled-components";
import { PageHeader, Button, Descriptions } from "antd";

const HeaderWrapper = styled.div`
  padding: 24px;
  background-color: #f5f5f5;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
`;
const SalesInput = () => {
  return (
    <Container>
      <HeaderWrapper>
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="매출 등록"
          subTitle="매출 정보를 입력하면 거래명세서가 자동으로 생성됩니다."
          extra={[
            <Button key="3" style={{ backgroundColor: "red" }}>
              거래명세서 출력
            </Button>,
            <Button key="2">재고데이터 보기</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="작성일자">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="부가세별도">
              <a>421421</a>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </HeaderWrapper>
    </Container>
  );
};

export default SalesInput;
