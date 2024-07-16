import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import MainHeader from "../../components/MainHeader";
import Back from "../../assets/icon/Back";
import Human from "../../assets/icon/Human";
import Calender from "../../assets/icon/Calender";

import onAccept from "../../utils/Accept";

function DataPage() {
  const [viewData, setViewData] = useState();

  const [acceptData, setAcceptData] = useState({
    id: "",
    state: ""
  })

  useEffect(() => {
    const data = localStorage.getItem("id");
    onView(data);
    setAcceptData({
      ...acceptData,
      id: data,
    });
  }, []);

  const onView = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    const token = sessionStorage.getItem("accessToken");
    console.log(data);

    axios
      .post(`${API_BASE_URL}/report_view`, {
        report_id: data
      }, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
    });
}

  const onClickBack = () => {
    window.location.assign("/main");
  }

  const onClickButton = (e) => {
      const { name } = e.target;
      setAcceptData({
      ...acceptData,
      state: name,
    });

    onAccept(acceptData);
  }

  return (
    <>
      <MainHeader />
      <Container>
        <Box>
          <BackButton onClick={() => onClickBack()}>
            <Back />
            <Text>돌아가기</Text>
          </BackButton>
          {viewData ?
          <Div>
            <Title>{viewData.title}</Title>
            <Title>
              <TagDiv>
                <Human />
                <Tag>{viewData.name}</Tag>
              </TagDiv>
              <TagDiv>
                <Calender />
                <Tag>{viewData.date}</Tag>
              </TagDiv>
            </Title>
            <Story>
            {viewData.detail}
            </Story>
            <Grape>
              <Text>{viewData.time} 데이터 기록</Text>
              <GrapeDiv></GrapeDiv>
            </Grape>
            <ButtonDiv>
              <ButtonOK name="YES" onClick={onClickButton}>승인하기</ButtonOK>
              <ButtonNo name="NO" onClick={onClickButton}>취소하기</ButtonNo>
            </ButtonDiv>
          </Div>
          :
          <Div></Div>
          }
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
	width: 100%;
	height: 100%;
  padding: 100px 0px;
  background-color: ${color.Gray[0]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 1100px;
  height: 1120px;
  background-color: ${color.White};
  border-radius: 20px;
  padding: 40px;
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${color.Gray[2]};
`

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: 940px;
  height: 70px;
  border-bottom: solid 1px ${color.Gray[1]};
  display: flex;
  align-items: center;
  gap: 60px;
`

const TagDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const Tag = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${color.Gray[2]};
`

const Story = styled.pre`
  width: 940px;
  height: 450px;
  font-size: 14px;
  font-weight: 600;
  color: ${color.Black};
  margin-top: 40px;
  white-space: pre-wrap;
  word-break: break-all;
  overflow: "auto",
`

const Grape = styled.div`
  width: 940px;
`

const GrapeDiv = styled.div`
  width: 940px;
  height: 300px;
  border: solid 1px ${color.Gray[1]};
`

const ButtonDiv = styled.div`
  width: 940px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`

const ButtonOK = styled.button`
  width: 460px;
  height: 50px;
  background-color: ${color.Red[2]};
  border: none;
  border-radius: 10px;
  color: ${color.White};
  &:hover {
    cursor: pointer;
  }
`

const ButtonNo = styled.button`
  width: 460px;
  height: 50px;
  border: solid 1px ${color.Gray[2]};
  border-radius: 10px;
  background-color: ${color.White};
  color: ${color.Gray[2]};
  &:hover {
    cursor: pointer;
  }
`

export default DataPage;