import { Container, TitleWrapper } from "./BusinessStyles";
import styled from "styled-components";
import { lightBlue } from "@mui/material/colors";
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

import { faTrashCan, faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState, useRef } from "react";
import { useEffect } from "react";

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DateWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
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

const initialSaleInputs = {
  salesMonth: "",
  salesDay: "",
  salesName: "",
  salesCost: 0,
  salesAmount: 0,
  salesPrice: 0,
  salesVat: 0,
  salesSumPrice: 0,
  salesMemo: "",
};

const SalesInput = () => {
  const [preSum, setPreSum] = useState({
    preSumPrice: 0,
    preSumVat: 0,
    preSumTotal: 0,
  });

  const temp1Ref = useRef(null);
  const temp2Ref = useRef(null);
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

  const nextFocus = (e, index, ref) => {
    if (e.key === "Enter") {
      switch (ref) {
        case "month":
          salesDayRef.current[index].focus();
          console.log(salesDayRef.current[index]);

        default:
          break;
      }
    }
  };

  useEffect(() => {
    refreshCal();
    calSumPrice();
  }, [Vat]);

  const Plus = <FontAwesomeIcon icon={faPlus} />;
  const Save = <FontAwesomeIcon icon={faSave} />;

  return (
    <Container>
      <TitleWrapper>매출 내역</TitleWrapper>
      <TopWrapper>
        <DateWrapper>
          <DateTitle>작성 일자</DateTitle>
          <DateInput>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={saleDate}
                inputFormat={"yyyy-MM-dd"}
                mask={"____-__-__"}
                onChange={(newValue) => {
                  setSaleDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
          </DateInput>
          <FormControl sx={{ ml: 5 }}>
            <FormControlLabel
              control={<Switch checked={Vat} onClick={() => setVat(!Vat)} />}
              label={Vat ? "부가세별도" : "부가세포함"}
            />
          </FormControl>
        </DateWrapper>
        <ActionWrapper style={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            width={130}
            disableElevation
            startIcon={Plus}
            sx={{ height: 40 }}
            onClick={() => {
              handleAddSaleInputs();
            }}
          >
            품목추가
          </Button>
          <Button
            variant="contained"
            color="error"
            width={30}
            disableElevation
            startIcon={Save}
            sx={{ height: 40, width: 115, marginLeft: "10px" }}
            onClick={() => {
              handleAddSaleInputs();
            }}
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
                    <TextField
                      autoFocus
                      size="small"
                      name="salesMonth"
                      value={item.salesMonth}
                      inputRef={(ref) => (salesMonthRef.current[index] = ref)}
                      //inputRef={temp1Ref}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      onFocus={(e) => {
                        e.target.select();
                      }}
                      onKeyPress={(e) => {
                        e.key === "Enter" && salesDayRef.current[index].focus();
                      }}
                      sx={{ width: 42 }}
                      inputProps={{
                        maxLength: 2,
                        style: { fontSize: 13 },

                        onKeyDown: (e) => {
                          if (
                            e.keyCode === 40 &&
                            salesMonthRef.current[index + 1] != undefined
                          ) {
                            salesMonthRef.current[index + 1].focus();
                          }
                        },
                      }}
                    />{" "}
                    <TextField
                      size="small"
                      name="salesDay"
                      value={item.salesDay}
                      inputRef={(ref) => (salesDayRef.current[index] = ref)}
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
                      sx={{ width: 42 }}
                      inputProps={{
                        maxLength: 2,
                        style: { fontSize: 13 },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesName"
                      value={item.salesName}
                      inputRef={(ref) => (salesNameRef.current[index] = ref)}
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
                      inputProps={{
                        style: { fontSize: 13 },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesCost"
                      value={new Intl.NumberFormat().format(item.salesCost)}
                      inputRef={(ref) => (salesCostRef.current[index] = ref)}
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
                      inputProps={{
                        style: { fontSize: 13, textAlign: "right" },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesAmount"
                      value={new Intl.NumberFormat().format(item.salesAmount)}
                      inputRef={(ref) => (salesAmountRef.current[index] = ref)}
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
                      inputProps={{
                        style: { fontSize: 13, textAlign: "center" },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesPrice"
                      value={new Intl.NumberFormat().format(item.salesPrice)}
                      inputRef={(ref) => (salesPriceRef.current[index] = ref)}
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
                      inputProps={{
                        style: { fontSize: 13, textAlign: "right" },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesVat"
                      value={new Intl.NumberFormat().format(item.salesVat)}
                      inputRef={(ref) => (salesVatRef.current[index] = ref)}
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
                      inputProps={{
                        style: { fontSize: 13, textAlign: "right" },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesSumPrice"
                      value={new Intl.NumberFormat().format(item.salesSumPrice)}
                      inputRef={(ref) =>
                        (salesSumPriceRef.current[index] = ref)
                      }
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
                      inputProps={{
                        style: { fontSize: 13, textAlign: "right" },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      name="salesMemo"
                      value={item.salesMemo}
                      inputRef={(ref) => (salesMemoRef.current[index] = ref)}
                      onChange={(e) => {
                        handleChangeSaleInputs(e, index);
                      }}
                      fullWidth
                      inputProps={{
                        style: { fontSize: 13 },
                      }}
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
