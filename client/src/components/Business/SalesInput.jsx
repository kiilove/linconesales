import { Container, TitleWrapper } from "./BusinessStyles";
import styled from "styled-components";
import { blue, lightBlue } from "@mui/material/colors";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

import { Input, Button, DatePicker, AutoComplete } from "antd";
import { Switch } from "antd";
import { faTrashCan, faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState, useRef } from "react";
import { useEffect } from "react";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DateWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 30px;
`;

const DateTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 140px;
  background-color: ${lightBlue[200]};
`;

const DateInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
`;

const VatCheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
`;

const VatText = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

const ActionWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const ItemTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TableSumWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  font-weight: bold;
`;

const SalesInput = () => {
  const [preSum, setPreSum] = useState({
    preSumPrice: 0,
    preSumVat: 0,
    preSumTotal: 0,
  });

  const salesMonthRef = useRef([]);
  const salesDayRef = useRef([]);
  const salesNameRef = useRef([]);
  const salesCostRef = useRef([]);
  const salesPriceRef = useRef([]);
  const salesAmountRef = useRef([]);
  const salesVatRef = useRef([]);
  const salesSumPriceRef = useRef([]);
  const salesMemoRef = useRef([]);
  const [saleDate, setSaleDate] = useState(Date.now());
  const [Vat, setVat] = useState(true);
  const [saleInputs, setSaleInputs] = useState([
    {
      salesMonth: new Date(saleDate).getMonth() + 1,
      salesDay: new Date(saleDate).getDate(),
      salesName: "",
      salesCost: 0,
      salesAmount: 0,
      salesPrice: 0,
      salesVat: 0,
      salesSumPrice: 0,
      salesMemo: "",
    },
  ]);

  const calPrice = (cost, amount) => {
    let price = 0;
    let vat = 0;
    let sumPrice = 0;
    if (Vat) {
      price = parseInt(cost * amount);
      vat = parseInt(price * 0.1);
      sumPrice = parseInt(price + vat);
      return { price, vat, sumPrice };
    } else {
      sumPrice = parseInt(cost * amount);
      price = parseInt(sumPrice / 1.1);
      vat = parseInt(sumPrice - price);
      return { price, vat, sumPrice };
    }
  };

  const calSumPrice = () => {
    let price = 0;
    let vat = 0;
    let sumPrice = 0;
    setPreSum(() => ({ preSumPrice: 0, preSumVat: 0, preSumTotal: 0 }));

    saleInputs.map((item, index) => {
      price = item.salesPrice + price;
      vat = +item.salesVat + vat;
      sumPrice = +item.salesSumPrice + sumPrice;
      //console.log(price);
      setPreSum(() => ({
        preSumPrice: price,
        preSumVat: vat,
        preSumTotal: sumPrice,
      }));
    });
    //console.log(preSum);
  };
  const refreshCal = () => {
    saleInputs.map((item, index) => {
      const { price, vat, sumPrice } = calPrice(
        item.salesCost,
        item.salesAmount
      );

      const inputs = [...saleInputs];
      inputs[index].salesPrice = price;
      inputs[index].salesVat = vat;
      inputs[index].salesSumPrice = sumPrice;

      setSaleInputs(() => inputs);
    });
  };

  const handleChangeSaleInputs = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const inputs = [...saleInputs];
    inputs[index][name] =
      name === "salesName" || name === "salesMemo"
        ? value
        : value.replaceAll(",", "");

    const { price, vat, sumPrice } = calPrice(
      inputs[index].salesCost,
      inputs[index].salesAmount
    );
    inputs[index].salesPrice = price;
    inputs[index].salesVat = vat;
    inputs[index].salesSumPrice = sumPrice;

    setSaleInputs(inputs);
    calSumPrice();
  };

  const handleAddSaleInputs = () => {
    setSaleInputs([
      ...saleInputs,
      {
        salesMonth: new Date(saleDate).getMonth() + 1,
        salesDay: new Date(saleDate).getDate(),
        salesName: "",
        salesCost: 0,
        salesAmount: 0,
        salesPrice: 0,
        salesVat: 0,
        salesSumPrice: 0,
        salesMemo: "",
      },
    ]);
    calSumPrice();
  };

  const handleRemoveSaleInputs = (e, index) => {
    e.preventDefault();

    const inputs = [...saleInputs];
    inputs.splice(index, 1);

    setSaleInputs(inputs);
    calSumPrice();
  };

  useEffect(() => {
    refreshCal();
    calSumPrice();
  }, [Vat]);

  const Plus = <FontAwesomeIcon icon={faPlus} style={{ marginRight: 10 }} />;
  const Save = <FontAwesomeIcon icon={faSave} style={{ marginRight: 10 }} />;

  return (
    <Container>
      <TitleWrapper>매출 내역</TitleWrapper>
      <TopWrapper>
        <DateWrapper>
          <DateTitle>작성 일자</DateTitle>
          <DateInput>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker />
            </LocalizationProvider>
          </DateInput>
          {/* <FormControl sx={{ ml: 5 }}>
            <FormControlLabel
              control={<Switch checked={Vat} onClick={() => setVat(!Vat)} />}
              label={Vat ? "부가세별도" : "부가세포함"}
            />
          </FormControl> */}
          <VatCheckWrapper>
            <VatText>부가가치세</VatText>
            <Switch
              checkedChildren="별도"
              unCheckedChildren="포함"
              defaultChecked
              onChange={() => setVat(!Vat)}
            />
          </VatCheckWrapper>
        </DateWrapper>
        <ActionWrapper style={{ justifyContent: "flex-end" }}>
          <Button
            icon={Plus}
            onClick={() => {
              handleAddSaleInputs();
            }}
          >
            품목추가
          </Button>
          <Button
            type="primary"
            icon={Save}
            danger
            onClick={() => {
              handleAddSaleInputs();
            }}
            style={{ width: 100, marginLeft: 10 }}
          >
            저장
          </Button>
        </ActionWrapper>
      </TopWrapper>
      <ItemTableWrapper>
        <TableContainer>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell width={"8%"} align="center">
                  날짜
                </TableCell>
                <TableCell width={"27%"} align="center">
                  품목
                </TableCell>
                <TableCell width={"10%"} align="center">
                  단가
                </TableCell>
                <TableCell width={"5%"} align="center">
                  수량
                </TableCell>
                <TableCell width={"10%"} align="center">
                  공급가액
                </TableCell>
                <TableCell width={"8%"} align="center">
                  세액
                </TableCell>
                <TableCell width={"12%"} align="center">
                  합계
                </TableCell>
                <TableCell width={"15%"} align="center">
                  비고
                </TableCell>
                <TableCell width={"5%"} align="center">
                  삭제
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {saleInputs.map((item, index) => (
                <TableRow>
                  <TableCell
                    align="center"
                    style={{
                      fontSize: 20,
                    }}
                  >
                    <Input
                      autoFocus
                      name="salesMonth"
                      format="00"
                      maxLength={2}
                      style={{ width: 40, textAlign: "center" }}
                      value={item.salesMonth}
                      ref={(ref) => (salesMonthRef.current[index] = ref)}
                      //inputRef={temp1Ref}
                      onChange={(e) => {
                        handleChangeSaleInputs(index);
                      }}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" && salesDayRef.current[index].focus();
                      }}
                    />{" "}
                    <Input
                      name="salesDay"
                      maxLength={2}
                      style={{ width: 40, textAlign: "center" }}
                      value={item.salesDay}
                      ref={(ref) => (salesDayRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          salesNameRef.current[index].focus();
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesName"
                      value={item.salesName}
                      ref={(ref) => (salesNameRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          salesCostRef.current[index].focus();
                      }}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesCost"
                      value={new Intl.NumberFormat().format(item.salesCost)}
                      ref={(ref) => (salesCostRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          salesAmountRef.current[index].focus();
                      }}
                      fullWidth
                      style={{ textAlign: "right" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesAmount"
                      value={new Intl.NumberFormat().format(item.salesAmount)}
                      ref={(ref) => (salesAmountRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          salesPriceRef.current[index].focus();
                      }}
                      fullWidth
                      style={{ textAlign: "center" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesPrice"
                      value={new Intl.NumberFormat().format(item.salesPrice)}
                      ref={(ref) => (salesPriceRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" && salesVatRef.current[index].focus();
                      }}
                      fullWidth
                      style={{ textAlign: "right" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesVat"
                      value={new Intl.NumberFormat().format(item.salesVat)}
                      ref={(ref) => (salesVatRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          salesSumPriceRef.current[index].focus();
                      }}
                      fullWidth
                      style={{ textAlign: "right" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesSumPrice"
                      value={new Intl.NumberFormat().format(item.salesSumPrice)}
                      ref={(ref) => (salesSumPriceRef.current[index] = ref)}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" &&
                          salesMemoRef.current[index].focus();
                      }}
                      fullWidth
                      style={{ textAlign: "right" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="salesMemo"
                      value={item.salesMemo}
                      ref={(ref) => (salesMemoRef.current[index] = ref)}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <IconWrapper>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        onClick={(e) => {
                          handleRemoveSaleInputs(e, index);
                        }}
                      />
                    </IconWrapper>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ height: 50 }}>
                <TableCell colSpan={4}>
                  <TableSumWrapper>합계</TableSumWrapper>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <TableSumWrapper>
                    {preSum.preSumPrice.toLocaleString()}
                  </TableSumWrapper>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <TableSumWrapper>
                    {preSum.preSumVat.toLocaleString()}
                  </TableSumWrapper>
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <TableSumWrapper>
                    {preSum.preSumTotal.toLocaleString()}
                  </TableSumWrapper>
                </TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ItemTableWrapper>
    </Container>
  );
};

export default SalesInput;
