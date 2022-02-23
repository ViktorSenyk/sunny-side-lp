import styled from "styled-components";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
      <Container>
          <Header />
          <Main />
          <Footer />
      </Container>
  );
}

export default App;


const Container = styled.div`
  @media (max-width: 720px) {
    max-width: 720px;
  }
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`