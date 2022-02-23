import React, {useState} from 'react';
import styled from "styled-components";

const Header = () => {
    let [buttonStatus, setButtonStatus] = useState(false);
    return (
        <Container>
            <Logo>
                <img src="/images/logo.svg" alt="Logo"/>
            </Logo>
            <BurgerButton onClick={()=>setButtonStatus(!buttonStatus)} />
            <MobileMenu style={{height: buttonStatus ? '30vh' : '0', overflow: buttonStatus ? 'visible' : 'hidden'}}>
                <div>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">CONTACT</a>
                </div>
            </MobileMenu>
            <ButtonGroup>
                <ButtonMod1 href="#">About</ButtonMod1>
                <ButtonMod1 href="#">Services</ButtonMod1>
                <ButtonMod1 href="#">Projects</ButtonMod1>
                <ButtonMod2 href="#">CONTACT</ButtonMod2>
            </ButtonGroup>
        </Container>
    );
};

export default Header;

const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  z-index: 50;
`

const Logo = styled.div`
  height: 32%;
  img {
    height: 100%;
  }
`

const ButtonGroup = styled.nav`
  font-size: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    display: none;
  }
`

const ButtonMod1 = styled.a`
  color: white;
  margin-right: 30px;
  position: relative;
  :after {
    content: "";
    height: 2px;
    background-color: white;
    position: absolute;
    right: 0;
    bottom: -4px;
    left: 0;
    opacity: 0;
    transition-duration: 1000ms;
  }
  :hover {
    :after {
      opacity: 1;
    }
  }
`

const ButtonMod2 = styled(ButtonMod1)`
  display: block;
  background-color: white;
  color: black;
  padding: 15px 25px;
  border-radius: 25px;
  transition: 250ms all ease-in-out;
  font-family: 'Fraunces', serif;
  font-weight: 900;
  font-size: 13px;
  :after {
    display: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.55);
  }
`

const BurgerButton = styled.div`
  display: none;
  width: 50px;
  height: 50px;
  background: url("/images/icon-hamburger.svg") center no-repeat;
  cursor: pointer;
  @media (max-width: 720px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100px;
  right: 30px;
  width: 50%;
  height: 0;
  background-color: #ffffff;
  overflow: hidden;
  transition-duration: 100ms;
  :after {
    content: "";
    position: absolute;
    top: -30px;
    right: 0;
    border: 50px solid transparent;
    border-right: 50px solid white;
  }
  @media (max-width: 720px) {
    display: block;
  }

  div {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 7% 0;

    a {
      color: #88878d;
      font-size: 19px;

      :nth-child(4) {
        display: block;
        background-color: #fad503;
        color: black;
        padding: 18px 28px;
        border-radius: 25px;
        transition: 250ms all ease-in-out;
        font-family: 'Fraunces', serif;
        font-weight: 900;
        font-size: 15px;
      }
    }
  }
`