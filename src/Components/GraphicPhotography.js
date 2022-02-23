import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";

const GraphicPhotography = () => {
    let info = {
        leftBlock: {
            title: "Graphic Design",
            description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."
        },
        rightBlock: {
            title: "Photography",
            description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        }
    }
    return (
        <Fade left>
            <Container>
                <TextBlock style={{background: 'center / cover no-repeat url("/images/desktop/image-graphic-design.jpg")'}}>
                    <Wrap>
                        <h1>{info.leftBlock.title}</h1>
                        <p>{info.leftBlock.description}</p>
                    </Wrap>
                </TextBlock>
                <TextBlock style={{background: 'center / cover no-repeat url("/images/desktop/image-photography.jpg")'}}>
                    <Wrap>
                        <h1>{info.rightBlock.title}</h1>
                        <p>{info.rightBlock.description}</p>
                    </Wrap>
                </TextBlock>
            </Container>
        </Fade>

    );
};

export default GraphicPhotography;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  @media (max-width: 720px) {
    height: 100vh;
    display: block;
  }
`

const TextBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  text-align: center;
  @media (max-width: 720px) {
    width: 100%;
    height: 50vh;
  }
`

const Wrap = styled.div`
  width: 60%;

  h1 {
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 25px;
    color: rgba(34, 82, 73, 0.93);
  }

  p {
    color: rgba(34, 82, 73, 0.95);
    font-size: 13px;
    margin: 10% 0;
    line-height: 1.7;

  }
`

