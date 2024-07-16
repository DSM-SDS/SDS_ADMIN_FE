import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Header from "../../components/Header";

function LoginPage() {
  const onClickLogin = () => {
    window.location.assign("/main");
  }

  return (
    <>
      <Header />
      <Container>
        <Text>Login</Text>
        <InputDiv>
          <Input className="id" type="text" placeholder="아이디" />
          <Input className="pw" type="password" placeholder="비밀번호" />
        </InputDiv>
        <Button onClick={() => onClickLogin()}>로그인</Button>
      </Container>
    </>
  );
}

const Container = styled.div`
	width: 100%;
	height: 94vh;
  background-color: ${color.Gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 100px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${color.Red[1]};
`

const Input = styled.input`
  width: 670px;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  padding-left: 30px;
  &:focus {
    outline: none;
  }
`

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
`

const Button = styled.button`
  background-color: ${color.Red[1]};
  color: ${color.White};
  font-size: 20px;
  font-weight: 600;
  width: 700px;
  height: 60px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`

export default LoginPage;