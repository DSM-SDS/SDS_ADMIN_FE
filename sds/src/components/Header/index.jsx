import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Logo from "../../assets/icon/Logo";

function Header() {

  return (
    <Container>
      <LogoStyle>
        <Logo />
      </LogoStyle>
    </Container>
  );
}

const Container = styled.div`
	width: 100%;
	height: 6vh;
  background-color: ${color.White};
  display: flex;
  align-items: center;
`;

const LogoStyle = styled.div`
  margin-left: 350px;
  display: flex;
`


export default Header;