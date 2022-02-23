import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";

const Banner = () => {
    return (
        <Fade>
            <Container>
                <span>WE ARE CREATIVES</span>
                <img src="/images/icon-arrow-down.svg" alt="arrow"/>
            </Container>
        </Fade>
    );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background: center / cover no-repeat url("/images/desktop/image-header.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  letter-spacing: 8px;

  span {
    font-family: 'Fraunces', serif;
    font-weight: 900;
    margin-bottom: 9%;
    @media (max-width: 720px) {
      font-size: 45px;
      text-align: center;
    }
  }
  img {
    height: 13%;
    margin-bottom: 10%;
    @media (max-width: 720px) {
      height: 25%;
      margin-bottom: 18%;
    }
  }
`