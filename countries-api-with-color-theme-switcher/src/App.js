import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Body />
    </Container>
  );
}

const Container = styled.div`
  width: 1440px;
  height: 1024px;
  border: 1px solid black;
`;

export default App;
