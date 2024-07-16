import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

function Header() {

  return (
    <Container></Container>
  );
}

const Container = styled.div`
	width: 100%;
	height: 6vh;
    background-color: ${color.White};
`;


export default Header;