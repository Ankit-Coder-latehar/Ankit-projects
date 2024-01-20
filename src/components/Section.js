import React from "react";
import Styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = Styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position: center;
background-repeat:no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
background-image : ${(props) => `url("/images/${props.bgImg}")`}
`;

const ItemText = Styled.div`
    padding-top:15vh;
    text-align : center;
`;

const ButtonGroup = Styled.div`
  display:flex;
  margin-bottom:30px;
  @media(max-width:768px){
    flex-direction:column;
  }
`;

const LeftButton = Styled.div`
 background-color: rgba(23,26,32,0.8);
 height: 40px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius:100px;
 opacity:0.85;
 text-transform: uppercase;
 font-size:12px;
 cursor:pointer;
 margin : 8px;
`;

const RightButton = Styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;

`;

const DownArrow = Styled.img`
 height:40px;
 overflow-x:hidden;
 animation: animateDown infinite 1.5s;
`;

const Button = Styled.div`

`;
