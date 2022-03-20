import { Layout } from "antd";
import TopMenu from "../layout/TopMenu";
import SalesInput from "./SalesInput";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Header
        theme="light"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <TopMenu />
      </Header>
      <Content
        style={{
          padding: "20px 20px",
          marginTop: 64,
          backgroundColor: "white",
        }}
      >
        <SalesInput />
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default Home;
