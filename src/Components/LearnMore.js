import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";

const LearnMore = (props) => {
    let info = props.block
        ? {
            title: 'Transform your brand',
            text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
            flexDirection: "row",
            img: 'url("/images/desktop/image-transform.jpg'
        }
        : {
            title: 'Stand out to the right audience',
            text: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we will build and extend your brand in digital places.',
            flexDirection: "row-reverse",
            img: 'url("/images/desktop/image-stand-out.jpg'
    }
    return (
        <Fade>
            <Container style={{flexDirection: info.flexDirection}}>
                <TextContent>
                    <Text>
                        <h1>{info.title}</h1>
                        <p>{info.text}</p>
                        <LearMoreButton>
                            <img src="https://i.ibb.co/TB2DVgK/learnmore.png" alt="Learn More"/>
                        </LearMoreButton>
                    </Text>
                </TextContent>
                <Img style={{background: 'center / cover no-repeat ' + info.img}}  />
            </Container>
        </Fade>

    );
};

export default LearnMore;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  @media (max-width: 720px) {
    height: 100vh;
    display: block;
    text-align: center;
  }
`

const TextContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    width: 100%;
    height: 50vh;
  }
`

const Text = styled.div`
  width: 70%;

  h1 {
    font-size: 30px;
    margin-bottom: 8px;
    font-family: 'Fraunces', serif;
    font-weight: 900;
  }

  p {
    color: #848391;
    line-height: 1.9;
    margin-bottom: 20px;
    font-size: 13px;
  }
`

const LearMoreButton = styled.a`
  display: block;
  cursor: pointer;
`

const Img = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 720px) {
    width: 100%;
    height: 50vh;
  }
`