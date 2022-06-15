import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 75vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.cauroselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or purchased from secondary, you will be able to see your WOF NFT in your Phantom wallet.
          </Accordion>
          <Accordion title="WHERE WILL WOF BE LISTED?">
            WOF will be listed on MagicEden and any other secondary marketplaces requested by the community. 
          </Accordion>
        </Box>
        <Box>
          <Accordion title="WHAT DOES HOLDING A WOF NFT DO?">
            By holding your WOF NFT, you will be able to participate in the weekly events. The weekly events will contain a variety of events that all members will have the oppportunity to participate in. Along with other benefits that will be released shortly in the future.
          </Accordion>
          <Accordion title="WHAT IS WOF?">
            WOF is a community based project on the Solana blockchain. WOF was created to give back rewards to our community. We will host multiple events throughout each week that allows our verified holders to have a chance to earn $SOL by interacting / participating in community events. There will be a variety of ways that we will host events to give a fair opportunity to all of our members. 
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
