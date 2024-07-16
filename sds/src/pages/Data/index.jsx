import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import MainHeader from "../../components/MainHeader";
import Back from "../../assets/icon/Back";
import Human from "../../assets/icon/Human";
import Calender from "../../assets/icon/Calender";

function DataPage() {
  const onClickBack = () => {
    window.location.assign("/main");
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
          <Div>
            <Title>제목</Title>
            <Title>
              <TagDiv>
                <Human />
                <Tag>이름</Tag>
              </TagDiv>
              <TagDiv>
                <Calender />
                <Tag>0000-00-00</Tag>
              </TagDiv>
            </Title>
            <Story>
            아니 201호 너무 시끄러운거 같은데요;;<br/>혹시 밤에 운동하시나요....<br/>제발 12시 넘어서는 뛰지맙시다.<br/>혼자 사는 곳 아니잖아요.<br/>서로 배려하면서 삽니다.
            </Story>
            <Grape>
              <Text>00:00 ~ 00:00 데이터 기록</Text>
              <GrapeDiv></GrapeDiv>
            </Grape>
            <ButtonDiv>
              <ButtonOK>승인하기</ButtonOK>
              <ButtonNo>취소하기</ButtonNo>
            </ButtonDiv>
          </Div>
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

const Story = styled.div`
  width: 940px;
  height: 450px;
  font-size: 14px;
  font-weight: 600;
  color: ${color.Black};
  margin-top: 40px;
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