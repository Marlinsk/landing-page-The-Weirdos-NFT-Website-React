import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>

        <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundTextBlack} alt="NFT"></img>
        </Round>
      </Container>
    </Section>
  );
};

export default Home;
