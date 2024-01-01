import React, { useState } from "react";
import styled from "styled-components";

const ExpensesChart = () => {
  const weekSpend = [
    { day: "mon", spend: 50 },
    { day: "tue", spend: 90 },
    { day: "wed", spend: 130 },
    { day: "thu", spend: 80 },
    { day: "fri", spend: 60 },
    { day: "sat", spend: 100 },
    { day: "sun", spend: 70 },
  ];

  const [hover, setHover] = useState(false);
  var total = 0;
  const t = weekSpend.map((d) => (total = total + d.spend));

  const handleMouse = (index) => {
    setHover(true);
    document.querySelectorAll(".spends")[index].style.display = "block";
    document.querySelectorAll(`.bar`)[index].style.backgroundColor =
      " hsl(186, 34%, 60%)";
  };

  const handleMouseLeave = (index) => {
    setHover(false);
    document.querySelectorAll(".spends")[index].style.display = "none";
    document.querySelectorAll(`.bar`)[index].style.backgroundColor =
      "hsl(10, 79%, 65%)";
  };

  return (
    <Container>
      <div className="top">
        <div className="balance">
          <p style={{ color: "white" }}>My balance</p>
          <h1>$ 921.48</h1>
        </div>
        <div className="logo">
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bottom">
        <h1>Spending - Last 7 days</h1>
        <div className="graph">
          {weekSpend.map((day, index) => {
            return (
              <div
                key={index}
                onMouseOver={() => handleMouse(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="main-bar">
                <p className="spends">{day.spend}</p>
                <div
                  style={{ height: day.spend, color: "white" }}
                  className="bar"></div>
                <p>{day.day}</p>
              </div>
            );
          })}
        </div>
        <hr className="orange" />
        <div className="footer">
          <p className="lite-brown">Total This month</p>
          <div className="footer-blance">
            <h1>$ {total}</h1>
            <div>
              <p className="percentage">+2.4%</p>
              <p className="lite-brown">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 545px;
  height: 655px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    width: 100%;
    height: 120px;
    border-radius: 15px;
    color: white;
    background-color: hsl(10, 79%, 65%);
  }

  .top .balance p {
    font-size: 18px;
    font-weight: 400;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 512px;
    border-radius: 15px;
    padding: 2rem;
    background-color: white;
  }

  .bottom h1,
  .bottom .footer .footer-blance div .percentage {
    color: hsl(25, 47%, 15%);
  }

  .graph {
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 462px;
    height: 178px;
  }

  .graph div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .graph div div {
    width: 50px;
    height: 70px;
    border-radius: 5px;
    background-color: hsl(10, 79%, 65%);
  }

  .bottom .footer {
    width: 100%;
    height: 74px;
  }

  .bottom .footer .footer-blance {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bottom .footer .footer-blance div {
    text-align: end;
  }

  .lite-brown {
    color: hsl(28, 10%, 53%);
  }

  .orage {
    border-color: hsl(27, 66%, 92%);
  }

  .spends {
    display: none;
    width: 100%;
    text-align: center;
    padding: 5px 8px;
    color: white;
    border-radius: 5px;
    background-color: hsl(25, 47%, 15%);
  }

  @media screen and (max-width: 400px) {
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .top {
      width: 342px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      height: 94px;
      border-radius: 15px;
      color: white;
      background-color: hsl(10, 79%, 65%);
    }
    .top h1 {
      font-size: 1.5rem;
    }
    .top .balance p {
      font-size: 18px;
      font-weight: 400;
    }
    .graph {
      display: flex;
      align-items: end;
      justify-content: space-between;
      width: 303px;
      height: 178px;
    }
    .graph div div {
      width: 33px;
      height: 70px;
      border-radius: 5px;
      background-color: hsl(10, 79%, 65%);
    }
    .bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 342px;
      height: 512px;
      border-radius: 15px;
      padding: 2rem 1rem;
      background-color: white;
    }
    .bottom h1 {
      font-size: 1.5rem;
    }
    .footer-blance h1 {
      font-size: 1.5rem;
    }
    .spends {
      display: none;
      width: 33px;
      text-align: center;
      color: white;
      font-size: 0.7rem;
      border-radius: 4px;
      background-color: hsl(25, 47%, 15%);
    }
  }
`;

export default ExpensesChart;
