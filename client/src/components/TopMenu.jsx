import {
  faCalendarAlt,
  faGraduationCap,
  faIdCard,
  faListUl,
  faPhone,
  faQuestion,
  faSearch,
  faUsers,
  faFileInvoiceDollar,
  faColumns,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, typography } from "@mui/system";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #292f4d;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 70px;
  display: flex;

  justify-content: space-between;
`;
const IconGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const IconBox = styled.span`
  margin: 0 10px;
  width: 60px;
  height: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: black;
    border-radius: 10px;
  }
`;

const TopMenu = () => {
  return (
    <Container>
      <Wrapper>
        <IconGroup style={{ justifyContent: "flex-start" }}>
          <div
            style={{
              fontSize: "27px",
              fontWeight: 600,
              color: "white",
              marginTop: "15px",
              marginBottom: "15px",
              marginRight: "20px",
            }}
          >
            Lincone
          </div>
          <Tooltip title="요약" placement="bottom">
            <Link to="/">
              <IconBox>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </IconBox>
            </Link>
          </Tooltip>
          <Tooltip title="거래처" placement="bottom">
            <Link to="/clientCompList">
              <IconBox>
                <FontAwesomeIcon icon={faIdCard} />
              </IconBox>
            </Link>
          </Tooltip>
          <Tooltip title="거래원장" placement="bottom">
            <Link to="/ledger">
              <IconBox>
                <FontAwesomeIcon icon={faListAlt} />
              </IconBox>
            </Link>
          </Tooltip>
          <Tooltip title="영업활동" placement="bottom">
            <Link to="/sales">
              <IconBox>
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
              </IconBox>
            </Link>
          </Tooltip>
          <Tooltip title="Todos" placement="bottom">
            <IconBox>
              <FontAwesomeIcon icon={faListUl} />
            </IconBox>
          </Tooltip>
        </IconGroup>
        <IconGroup style={{ justifyContent: "flex-end" }}>
          <Tooltip title="통합검색" placement="bottom">
            <Link to="/login">
              <IconBox>
                <FontAwesomeIcon icon={faColumns} />
              </IconBox>
            </Link>
          </Tooltip>
          <Tooltip title="자주하는 질문" placement="bottom">
            <Link to="/register">
              <IconBox>
                <FontAwesomeIcon icon={faQuestion} />
              </IconBox>
            </Link>
          </Tooltip>
          <Tooltip title="구성원관리" placement="bottom">
            <Link to="/salesPrint">
              <IconBox>
                <FontAwesomeIcon icon={faUsers} />
              </IconBox>
            </Link>
          </Tooltip>
        </IconGroup>
      </Wrapper>
    </Container>
  );
};

export default TopMenu;
