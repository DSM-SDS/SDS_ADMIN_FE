import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import MainHeader from "../../components/MainHeader";
import Profile from "../../assets/icon/Profile";
import Human from "../../assets/icon/Human";
import StateIcon from "../../assets/icon/State";

function MainPage() {
  const [responseData, setResponseData] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    onList();
    setName(localStorage.getItem("username"));
  },[]);

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  const onList = async () => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    const token = sessionStorage.getItem("accessToken");

    axios
      .post(`${API_BASE_URL}/report_list`, {}, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
      })
      .catch((err) => {
        console.log(err.data);
        alert("에러가 발생했습니다.");
    });
  }

  const onClickData = (id) => {
    console.log(id);
    localStorage.setItem("id", id);
    window.location.assign("/data");
  }

  return (
    <>
      <MainHeader />
      <Container>
        <Box>
          <UserContainer>
            <Label>MY PAGE</Label>
            <TextDiv>
              <Profile></Profile>
              <Text>{name}</Text>
            </TextDiv>
          </UserContainer>
          <DataContainer>
          {responseData && responseData.map((item) => (
            <DataColumn onClick={() => onClickData(item.report_id)}>
              <Title>{item.title}</Title>
              <DataDiv>
                <TagDiv>
                  <Human />
                  <Tag>{item.name}</Tag>
                </TagDiv>
                <TagDiv>
                  <StateIcon />
                  <State>{item.is_accepted=="YES" ? "승인" : "대기"}</State>
                </TagDiv>
                <TagDiv>
                  <Tag>{item.hosu}호</Tag>
                </TagDiv>
              </DataDiv>
            </DataColumn>
              ))}
          </DataContainer>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
	width: 100%;
	height: 94vh;
  background-color: ${color.Gray[0]};
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
`;

const UserContainer = styled.div`
  width: 240px;
  height: 100px;
  background-color: ${color.White};
  border-radius: 15px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
`;

const DataContainer = styled.div`
  width: 820px;
  height: 750px;
  background-color: ${color.White};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  padding-top: 45px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: bold,
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${color.Black};
`;

const TextDiv = styled.div`
  width: 240px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const DataColumn = styled.div`
  width: 620px;
  height: 90px;
  border-bottom: solid 1px ${color.Gray[1]};
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${color.Black};
  margin-bottom: 20px;
  -webkit-user-select: none;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${color.Gray[2]};
  -webkit-user-select: none;
`;

const State = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${color.Red[3]};
`

const DataDiv = styled.div`
  display: flex;
  gap: 30px;
`

const TagDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export default MainPage;