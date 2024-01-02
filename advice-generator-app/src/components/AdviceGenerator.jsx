import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState();

  useEffect(() => {
    async function fetch() {
      axios
        .get("	https://api.adviceslip.com/advice")
        .then((res) => setAdvice(res.data.slip));
    }
    fetch();
  }, [0]);

  const handleAdvice = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip));
  };
  return (
    <Container>
      <div className="content">
        {advice && <h4>Advice # {advice.id}</h4>}
        {advice && <p>"{advice.advice}"</p>}
        <div className="line-div">
          <div>
            ————————————————————————————————————————————————————————————————————————————————————————
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            —————————————————————————————————————————————————————————————————————————————————————————
          </div>
        </div>
      </div>
      <div className="dice">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
            onClick={handleAdvice}
          />
        </svg>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 542px;
  height: 362px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 333px;
    border-radius: 15px;
    padding: 2rem;
    background-color: hsl(217, 19%, 24%);
    h4 {
      text-align: center;
      text-transform: uppercase;
      color: hsl(150, 100%, 66%);
      letter-spacing: 2px;
      font-weight: 600;
    }
    p {
      text-align: center;
      font-size: 30px;
      color: hsl(193, 38%, 86%);
    }
    .line-div {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      div {
        display: flex;
        align-items: center;
        text-decoration: line-through;
        font-size: 3px;
        gap: 6px;
        color: hsl(193, 38%, 86%);
        justify-content: center;
        p {
          width: 5px;
          height: 15px;
          border-radius: 4px;
          background-color: hsl(193, 38%, 86%);
        }
      }
    }
  }
  .dice {
    position: absolute;
    bottom: 0rem;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(150, 100%, 66%);
  }
  @media screen and (max-width: 400px) {
    width: 345px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-radius: 15px;
      padding: 2rem;
      background-color: hsl(217, 19%, 24%);
      h4 {
        text-align: center;
        text-transform: uppercase;
        color: hsl(150, 100%, 66%);
        letter-spacing: 1.5px;
        font-weight: 600;
      }
      p {
        text-align: center;
        font-size: 25px;
        color: hsl(193, 38%, 86%);
      }
      .line-div {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        div {
          display: flex;
          align-items: center;
          text-decoration: line-through;
          font-size: 1.8px;
          gap: 6px;
          color: hsl(193, 38%, 86%);
          justify-content: center;
          p {
            width: 5px;
            height: 15px;
            border-radius: 4px;
            background-color: hsl(193, 38%, 86%);
          }
        }
      }
    }
    .dice {
      position: absolute;
      bottom: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: hsl(150, 100%, 66%);
    }
  }
`;

export default AdviceGenerator;
