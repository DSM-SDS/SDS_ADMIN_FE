import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Header from "../../components/Header";
import Profile from "../../assets/icon/Profile";
import Human from "../../assets/icon/Human";
import StateIcon from "../../assets/icon/State";

function MainPage() {
  const onClickData = () => {
    window.location.assign("/data");
  }

  return (
    <>
      <Header />
      <Container>
        <Box>
          <UserContainer>
            <Label>MY PAGE</Label>
            <TextDiv>
              <Profile></Profile>
              <Text>admin</Text>
            </TextDiv>
            <TextBottom>
              <Text>소속</Text>
              <TextGray>00 아파트</TextGray>
            </TextBottom>
          </UserContainer>
          <DataContainer>
            <DataColumn onClick={() => onClickData()}>
              <Title>제목</Title>
              <DataDiv>
                <TagDiv>
                  <Human />
                  <Tag>이름</Tag>
                </TagDiv>
                <TagDiv>
                  <StateIcon />
                  <State>대기</State>
                </TagDiv>
              </DataDiv>
            </DataColumn>
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
  height: 140px;
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

const TextGray = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${color.Gray[2]};
`;

const TextDiv = styled.div`
  width: 240px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 50px;
  border-bottom: solid 1px ${color.Gray[1]};
`;

const TextBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 10px;
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
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${color.Gray[2]};
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