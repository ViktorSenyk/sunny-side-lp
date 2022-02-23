import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <Logo />
            <ButtonGroup>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </ButtonGroup>
            <SocialGroup>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </SocialGroup>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 25vh;
  background-color: #8fd3c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Logo = styled.div`
  margin-bottom: -40px;
  width: 150px;
  height: 25px;
  background-color: #266d5d;
  mask: url('/images/logo.svg') no-repeat center;
  cursor: pointer;
  transition-duration: 250ms;
  :hover {
    background-color: white;
  }
`

const ButtonGroup = styled.nav`
  font-size: 13px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    width: 80%;
    font-size: 15px;
  }
  a {
    color: #266d5d;
    transition-duration: 250ms;
    :hover {
      color: white;
    }
  }
`

const SocialGroup = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  a {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #266d5d;
    transition-duration: 250ms;
    :hover {
      background-color: white;
    }
  }
  a:nth-child(1) {
    mask: url('/images/icon-facebook.svg') no-repeat center;
  }
  a:nth-child(2) {
    mask: url('/images/icon-instagram.svg') no-repeat center;
  }
  a:nth-child(3) {
    mask: url('/images/icon-twitter.svg') no-repeat center;
  }
  a:nth-child(4) {
    mask: url('/images/icon-pinterest.svg') no-repeat center;
  }
`
