import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Logo from "../../assets/icon/Logo";

function MainHeader() {

  return (
    <Container>
      <Logo />
      <ButtonDiv></ButtonDiv>
    </Container>
  );
}

const Container = styled.div`
	width: 100%;
	height: 6vh;
  background-color: ${color.White};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonDiv = styled.div`
  width: 220px;
  height: 60px;
`
export default MainHeader;