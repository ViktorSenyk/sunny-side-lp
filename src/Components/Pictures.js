import React from 'react';
import styled from "styled-components";
import {Fade} from "react-reveal";

const Pictures = () => {
    return (
        <Fade bottom>
            <Container>
                <Wrap>
                    <img src="./images/desktop/image-gallery-milkbottles.jpg" />
                </Wrap>
                <Wrap>
                    <img src="./images/desktop/image-gallery-orange.jpg" />
                </Wrap>
                <Wrap>
                    <img src="./images/desktop/image-gallery-cone.jpg" />
                </Wrap>
                <Wrap>
                    <img src="./images/desktop/image-gallery-sugarcubes.jpg" />
                </Wrap>
            </Container>
        </Fade>
    );
};

export default Pictures;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`

const Wrap = styled.div`
  width: 25%;
  height: 100%;
  @media (max-width: 720px) {
    width: 50%;
    height: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`