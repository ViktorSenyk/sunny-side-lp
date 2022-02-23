import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";

const Clients = () => {
    let clientsInfo = {
        Emily: {
            img: '/images/image-emily.jpg',
            bigText: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
            name: 'Emily R.',
            prof: 'Marketing Director'
        },
        Thomas: {
            img: '/images/image-thomas.jpg',
            bigText: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            name: 'Thomas S.',
            prof: 'Chief Operating Officer'
        },
        Jennie: {
            img: '/images/image-jennie.jpg',
            bigText: 'Incredible and result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
            name: 'Jennie F.',
            prof: 'Business Owner'
        }
    }
    return (
        <Fade right>
            <Container>
                <Wrap>
                    <h2>CLIENT TESTIMONIALS</h2>
                    <ClientCard>
                        <ImgWrap>
                            <img src={clientsInfo.Emily.img} />
                        </ImgWrap>
                        <p>{clientsInfo.Emily.bigText}</p>
                        <h6>{clientsInfo.Emily.name}</h6>
                        <span>{clientsInfo.Emily.prof}</span>
                    </ClientCard>
                    <ClientCard>
                        <ImgWrap>
                            <img src={clientsInfo.Thomas.img} />
                        </ImgWrap>
                        <p>{clientsInfo.Thomas.bigText}</p>
                        <h6>{clientsInfo.Thomas.name}</h6>
                        <span>{clientsInfo.Thomas.prof}</span>
                    </ClientCard>
                    <ClientCard>
                        <ImgWrap>
                            <img src={clientsInfo.Jennie.img} />
                        </ImgWrap>
                        <p>{clientsInfo.Jennie.bigText}</p>
                        <h6>{clientsInfo.Jennie.name}</h6>
                        <span>{clientsInfo.Jennie.prof}</span>
                    </ClientCard>
                </Wrap>
            </Container>
        </Fade>
    );
};

export default Clients;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
  }

`

const  Wrap = styled.div`
  position: relative;
  width: 75%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    display: block;
    height: 90%;
    padding: 15% 0;
  }

  h2 {
    position: absolute;
    top: -15%;
    right: 0;
    left: 0;
    text-align: center;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 13px;
    color: rgba(128, 128, 128, 0.71);
    letter-spacing: 4px;
    @media (max-width: 720px) {
      top: 5%;
    }
  }
`

const ClientCard = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  @media (max-width: 720px) {
    width: 100%;
    height: 33vh;
    margin-top: 10%;
  }
  
  p{
    color: rgba(34, 82, 73, 0.95);
    font-size: 13px;
    margin: 10% 0;
    line-height: 1.7;
    @media (max-width: 720px) {
      font-size: 16px;
      margin: 0;
    }

  }
  h6 {
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 15px;
  }
  span {
    font-size: 10px;
    color: rgba(128, 128, 128, 0.71);
    margin-top: -12%;
    @media (max-width: 720px) {
      margin-top: -5%;
    }
  }
`

const ImgWrap = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`