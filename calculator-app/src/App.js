import styled from "styled-components";
import "./App.css";
import CalculatorApp from "./components/CalculatorApp";
import { useEffect, useState } from "react";

function App() {
  const [bg, setBg] = useState();
  // document.querySelector(".bg").style.backgroundColor = ;

  const getBg = (color) => {
    setBg(color);
    document.querySelector(".bg").style.backgroundColor = color;
  };
  return (
    <Container className="bg">
      <CalculatorApp getBg={getBg} />
    </Container>
  );
}

const Container = styled.div`
  width: 1440px;
  height: 900px;
  background-color: #3b4664;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100vh;
  }
`;

export default App;
