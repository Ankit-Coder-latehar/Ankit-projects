import React from "react";
import Styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = Styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding : 0 20px;
top:0;
left:0;
right:0;
`;

const Menu = Styled.div`
 display: flex;
 align-items:center;
 justify-content:center;
 flex:1;

 a{
    font-weight:600px;
    text-transform:Uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
 }
`;

const RightMenu = Styled.div`
a{
    font-weight:600px;
    text-transform:Uppercase;
    margin-right:10px;
 }
`;
