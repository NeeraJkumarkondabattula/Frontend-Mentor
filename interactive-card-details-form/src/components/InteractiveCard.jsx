import React, { useState } from "react";
import cardFront from "../assets/bg-card-front.png";
import cardBack from "../assets/bg-card-back.png";
import styled from "styled-components";

const InteractiveCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [validMonth, SetValidMonth] = useState("");
  const [validYear, SetValidYear] = useState("");
  const [cv, SetCv] = useState("");
  const [nameValid, setnameValid] = useState(true);
  const [numberValid, setnumberValid] = useState(true);
  const [dateValid, setdateValid] = useState(true);
  const [cvValid, setcvValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      setnameValid(false);
    } else {
      if (!/^[a-zA-Z\s]*$/g.test(name)) {
      }
      setnameValid(true);
    }
    if (number == "") {
      setnumberValid(false);
    } else {
      setnumberValid(true);
    }
    if (
      validMonth == "" ||
      validYear == "" ||
      (validMonth == "" && validYear == "")
    ) {
      setdateValid(false);
    } else {
      setdateValid(true);
    }
    if (cv == "") {
      setcvValid(false);
    } else {
      setcvValid(true);
    }
  };
  return (
    <Container>
      <div className="left-side">
        <div className="card-front">
          <div className="logo">
            <svg
              width="84"
              height="47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="23.478"
                cy="23.5"
                rx="23.478"
                ry="23.5"
                fill="#fff"
              />
              <path
                d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                stroke="#fff"
              />
            </svg>
          </div>
          <div className="card-number">
            {number == "" ? "0000 0000 0000 0000" : number}
          </div>
          <div className="card-holder-details">
            <h2>{name == "" ? "Jane Appleased" : name}</h2>
            <h3>
              {validMonth == "" ? "00" : validMonth}/
              {validYear == "" ? "00" : validYear}
            </h3>
          </div>
          <div className="bg-card-front">
            <img src={cardFront} alt="" />
          </div>
        </div>
        <div className="card-back">
          <div className="cv">{cv == "" ? "000" : cv}</div>
          <div className="bg-card-back">
            <img
              src={cardBack}
              alt=""
              style={{ position: "absolute", right: "0", bottom: "0" }}
            />
          </div>
        </div>
      </div>
      <form className="right-side" onSubmit={handleSubmit}>
        <div className="feild">
          <h2>CardHolder Name</h2>
          <input
            type="text"
            placeholder={`e.g. Jane Appleased`}
            onChange={(e) => setName(e.target.value)}
          />
          <p
            style={{
              color: "red",
              padding: ".4rem",
              visibility: !nameValid ? "visible" : "hidden",
            }}>
            Can't be black
          </p>
        </div>
        <div className="feild">
          <h2>Card Number</h2>
          <input
            type="text"
            placeholder={`e.g. 1234 5678 1233 3213`}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p
            style={{
              color: "red",
              padding: ".4rem",
              visibility: !numberValid ? "visible" : "hidden",
            }}>
            Can't be black
          </p>
        </div>
        <div
          className="validity feild
        ">
          <div>
            <h2>Exp. Date (MM/YY)</h2>
            <div className="date">
              <input
                type="text"
                placeholder={`MM`}
                onChange={(e) => SetValidMonth(e.target.value)}
              />
              <input
                type="text"
                placeholder={`YY`}
                onChange={(e) => SetValidYear(e.target.value)}
              />
            </div>
            <p
              style={{
                color: "red",
                padding: ".4rem",
                visibility: !dateValid ? "visible" : "hidden",
              }}>
              Can't be black
            </p>
          </div>
          <div>
            <h2>cvc</h2>
            <input
              type="text"
              placeholder={`e.g. 123`}
              onChange={(e) => SetCv(e.target.value)}
            />
            <p
              style={{
                color: "red",
                padding: ".4rem",
                visibility: !cvValid ? "visible" : "hidden",
              }}>
              Can't be black
            </p>
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 1050px;
  height: 526px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-side {
    position: relative;
    width: 541px;
    height: 526px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-front {
    position: relative;
  }
  .card-back {
    position: relative;
  }
  .logo {
    position: absolute;
    padding: 2rem;
  }
  .card-number {
    margin-top: 7rem;
    width: 100%;
    font-size: 35px;
    color: white;
    padding: 2rem;
    position: absolute;
    line-height: 22px;
  }

  .card-holder-details h2 {
    margin-top: 10rem;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    padding: 2rem;
    position: absolute;
    line-height: 22px;
  }
  .card-holder-details h3 {
    margin-top: 10rem;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    padding: 2rem;
    position: absolute;
    line-height: 22px;
    right: 6rem;
  }
  .cv {
    position: absolute;
    top: -8.5rem;
    right: 3rem;
    line-height: 22px;
    color: white;
    z-index: 1;
  }
  .bg-card.front {
    position: absolute;
  }
  .bg-card-back {
    position: absolute;
    right: 0;
    z-index: 0;
  }
  .left-side img {
    width: 446px;
  }
  .field {
    width: 100%;
    height: 100px;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 382px;
    height: 360px;
  }

  .right-side h2 {
    font-size: 18px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .right-side input {
    width: 100%;
    padding: 0.6rem 1rem;
    font-size: 22px;
    outline: none;
    border-radius: 8px;
    border: 1px solid gray;
  }

  .right-side .validity {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
  }

  .right-side .validity .date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .right-side .validity .date input {
  }
  .right-side button {
    width: 100%;
    padding: 1rem 0;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    background-color: hsl(278, 68%, 11%);
  }
  @media screen and (max-width: 400px) {
    width: 375%;
    height: 704px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .left-side {
      position: relative;
      width: 100%;
      height: 239px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card-front {
      width: 80%;
      position: relative;
      top: 9rem;
      left: 1.5rem;
      z-index: 1;
    }
    .card-back {
      position: relative;
      top: -2rem;
      right: 1.5rem;
      z-index: 0;
    }
    .logo {
      position: absolute;
      padding: 1rem;
    }
    .card-number {
      margin-top: 5rem;
      width: 100%;
      font-size: 1.3rem;
      color: white;
      padding: 1rem;
      position: absolute;
      line-height: 22px;
    }
    .card-holder-details h2 {
      margin-top: 6.5rem;
      font-size: 14px;
      text-transform: uppercase;
      color: white;
      padding: 1rem;
      position: absolute;
      line-height: 22px;
    }
    .card-holder-details h3 {
      margin-top: 6rem;
      font-size: 14px;
      text-transform: uppercase;
      color: white;
      padding: 1.5rem;
      position: absolute;
      line-height: 22px;
      right: 6rem;
    }
    .cv {
      position: absolute;
      top: -5.7rem;
      right: 2rem;
      line-height: 22px;
      color: white;
      z-index: 1;
    }
    .bg-card.front {
      position: absolute;
      bottom: 0;
      z-index: 1;
    }
    .left-side img {
      width: 286px;
    }
    .right-side {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 375px;
      height: 385px;
      padding: 1rem;
    }
    .right-side .validity {
      width: 100%;
      display: grid;
      grid-template-columns: 0.8fr 0.8fr;
      justify-content: center;
      align-items: center;
    }
    .right-side .validity .date {
      display: flex;
      align-items: center;
    }
    .feild input {
      width: 100%;
    }
    .right-side .validity div h2,
    .feild h2 {
      font-size: 0.8rem;
    }
    .right-side button {
      width: 100%;
      padding: 1rem 0;
      color: white;
      font-size: 18px;
      border-radius: 10px;
      background-color: hsl(278, 68%, 11%);
    }
  }
`;

export default InteractiveCard;
