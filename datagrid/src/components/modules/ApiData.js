import axios from "axios";

export const getData = async (url) => {
  const header = { "Content-type": "application/json" };
  try {
    const res = await axios({
      method: "get",
      url: url,
      headers: header,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    //alert(err);
  }
};

export const postData = async (items, url, modal) => {
  const header = { "Content-type": "application/json" };
  try {
    await axios({
      method: "post",
      url,
      headers: header,
      data: items,
    });
    alert("데이터 저장이 완료되었습니다.");
    modal && modal();
  } catch (error) {
    alert("저장 실패!(서버 연결을 확인하세요.)");
  }
};

export const putData = async (items, url) => {
  const header = { "Content-type": "application/json" };
  try {
    await axios({
      method: "put",
      url,
      headers: header,
      data: items,
    });
  } catch (error) {
    alert("업데이트 실패!(서버 연결을 확인하세요.)");
  }
};

export const getTodoMkData = async (url) => {
  const header = { "Content-type": "application/json" };
  try {
    const res = await axios({
      method: "get",
      url: url,
      headers: header,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postTodoMkData = async (items, todoUrl, res) => {
  const header = { "Content-type": "application/json" };
  try {
    await axios({
      method: "post",
      url: todoUrl,
      headers: header,
      data: items,
    });
    console.log(res.data);
  } catch (error) {
    alert("저장 실패!(서버 연결을 확인하세요.)");
  }
};
