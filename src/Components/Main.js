import React from 'react';
import styled from "styled-components";
import Banner from "./Banner";
import LearnMore from "./LearnMore";
import GraphicPhotography from "./GraphicPhotography";
import Clients from "./Clients";
import Pictures from "./Pictures";



const Main = () => {
    return (
        <Container>
            <Banner />
            <LearnMore block='true' />
            <LearnMore />
            <GraphicPhotography />
            <Clients />
            <Pictures />
        </Container>
    );
};

export default Main;

const Container = styled.main`
  width: 100%;
`