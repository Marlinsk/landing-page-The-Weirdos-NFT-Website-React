import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from "../assets/Nfts/0.png";
import img2 from "../assets/Nfts/13.png";
import img3 from "../assets/Nfts/15.png";
import img4 from "../assets/Nfts/20.png";
import img5 from "../assets/Nfts/29.png";
import img6 from "../assets/Nfts/30.png";
import img7 from "../assets/Nfts/33.png";
import img8 from "../assets/Nfts/35.png";
import img9 from "../assets/Nfts/36.png";
import img10 from "../assets/Nfts/37.png";

import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: transparent;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    width: 4rem;
    left: 0;
    top: 60%;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="The Weirdos" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
