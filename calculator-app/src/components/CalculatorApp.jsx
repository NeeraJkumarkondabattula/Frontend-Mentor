import React from "react";
import styled from "styled-components";

const CalculatorApp = ({ getBg }) => {
  const handleClick = (e) => {
    document.querySelector("input").value += e.target.value;
  };
  const handleDelete = (e) => {
    document.querySelector("input").value = document
      .querySelector("input")
      .value.slice(0, -1);
  };
  const handleEvalution = (e) => {
    let pro = document.querySelector("input").value;
    let ans = eval(pro);
    try {
      document.querySelector("input").value = ans;
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleReset = () => {
    document.querySelector("input").value = "";
  };
  const handleTheme1 = () => {
    if (
      (document.querySelector("#theme-changer").style.justifyContent = "left")
    ) {
      getBg("#E5E7E7");
      document.querySelector("input").style.color = "#36352E";
      document.querySelector(".logo").style.color = "#36352E";
      document.querySelector(".color1").style.color = "#36352E";
      document.querySelector(".color2").style.color = "#36352E";
      document.querySelector(".color3").style.color = "#36352E";
      document.querySelector(".theme-text").style.color = "#36352E";
      document.querySelector(".screen").style.backgroundColor = "#EFEFEF";
      document.querySelector(".dail-pad").style.backgroundColor = "#D4CDCD";
      document.querySelector("#btn").style.backgroundColor = "#388284";
      document.querySelector(".reset").style.backgroundColor = "#388284";
      document.querySelector(".result").style.backgroundColor = "#C85400";
      document.querySelector("#theme-changer").style.justifyContent = "center";
    }
  };
  const handleTheme2 = () => {
    if ((document.querySelector("input").style.justifyContent = "center")) {
      getBg("#170629");
      document.querySelector("input").style.color = "#F1DC56";
      document.querySelector(".logo").style.color = "#F1DC56";
      document.querySelector(".color1").style.color = "#F1DC56";
      document.querySelector(".color2").style.color = "#F1DC56";
      document.querySelector(".color3").style.color = "#F1DC56";
      document.querySelector(".theme-text").style.color = "#F1DC56";
      document.querySelector(".screen").style.backgroundColor = "#1D0836";
      document.querySelector(".dail-pad").style.backgroundColor = "#D4CDCD";
      document.querySelector("#btn").style.backgroundColor = "#56077D";
      document.querySelector(".reset").style.backgroundColor = "#56077D";
      document.querySelector(".result").style.backgroundColor = "#00DECE";
      document.querySelector("#theme-changer").style.justifyContent = "right";
    }
  };
  const handleTheme3 = () => {
    if (
      (document.querySelector("#theme-changer").style.justifyContent = "right")
    ) {
      getBg("#3B4664");
      document.querySelector("input").style.color = "#F2F8F9";
      document.querySelector(".logo").style.color = "#F2F8F9";
      document.querySelector(".color1").style.color = "#F2F8F9";
      document.querySelector(".color2").style.color = "#F2F8F9";
      document.querySelector(".color3").style.color = "#F2F8F9";
      document.querySelector(".theme-text").style.color = "#F2F8F9";
      document.querySelector(".screen").style.backgroundColor = "#191F32";
      document.querySelector(".dail-pad").style.backgroundColor = "#D4CDCD";
      document.querySelector("#btn").style.backgroundColor = "#647296";
      document.querySelector(".reset").style.backgroundColor = "#647296";
      document.querySelector(".result").style.backgroundColor = "#00DECE";
      document.querySelector("#theme-changer").style.justifyContent = "start";
    }
  };
  return (
    <Container>
      <div className="header">
        <div className="logo">calc</div>
        <div className="theme">
          <div className="themes">
            <p onClick={handleTheme3} className="color1">
              1
            </p>
            <p onClick={handleTheme1} className="color2">
              2
            </p>
            <p onClick={handleTheme2} className="color3">
              3
            </p>
          </div>
          <div className="theme-selection">
            <div className="theme-text">theme</div>
            <div className="toggle" id="theme-changer">
              <div className="ball" onClick={handleTheme1}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="screen">
        <input type="text" defaultValue="" />
      </div>
      <div className="dail-pad">
        <div className="keys">
          <button value={7} onClick={handleClick}>
            7
          </button>
          <button value={8} onClick={handleClick}>
            8
          </button>
          <button value={9} onClick={handleClick}>
            9
          </button>
          <button
            style={{ backgroundColor: "#3B4664", color: "white" }}
            onClick={handleDelete}
            id="btn">
            Del
          </button>
          <button value={4} onClick={handleClick}>
            4
          </button>
          <button value={5} onClick={handleClick}>
            5
          </button>
          <button value={6} onClick={handleClick}>
            6
          </button>
          <button value={"+"} onClick={handleClick}>
            +
          </button>
          <button value={1} onClick={handleClick}>
            1
          </button>
          <button value={2} onClick={handleClick}>
            2
          </button>
          <button value={3} onClick={handleClick}>
            3
          </button>
          <button value={"-"} onClick={handleClick}>
            -
          </button>
          <button value={"."} onClick={handleClick}>
            .
          </button>
          <button value={0} onClick={handleClick}>
            0
          </button>
          <button value={"/"} onClick={handleClick}>
            /
          </button>
          <button
            value={"*"}
            onClick={handleClick}
            style={{ textTransform: "lowercase" }}>
            x
          </button>
        </div>
        <div className="special">
          <button
            id="btn"
            className="reset"
            style={{ backgroundColor: "#3B4664", color: "white" }}
            onClick={handleReset}>
            Reset
          </button>
          <button
            className="result"
            style={{ backgroundColor: "#D13F30", color: "white" }}
            onClick={handleEvalution}>
            =
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 542px;
  height: 709px;
  .header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 30px;
    .logo {
      font-size: 2rem;
      font-weight: 700;
      color: white;
    }
    .theme {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: space-between;
      .themes {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 0.7rem;
        color: white;
        font-weight: 700;
        padding: 2px 6px;
        text-align: center;
        letter-spacing: 5px;
      }
      .theme-selection {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        font-size: 0.8rem;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
      }
      .toggle {
        width: 70px;
        height: 26px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        padding: 5px;
        background-color: #242e42;
        .ball {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #9c4549;
        }
      }
    }
  }
  .screen {
    width: 100%;
    height: 128px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #191f32;
    margin-bottom: 24px;
    input {
      width: 100%;
      border-radius: 15px;
      padding: 1rem;
      height: 90%;
      text-align: end;
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 4rem;
      color: white;
      line-height: 40px;
      font-weight: 700;
    }
  }
  .dail-pad {
    width: 100%;
    height: 482px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 30px;
    background-color: #252d44;
    .keys {
      width: 100%;
      height: 362px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      place-items: center;
      justify-content: space-between;
    }
    button {
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      width: 104px;
      height: 60px;
      background-color: #e9e3dc;
      border-radius: 10px;
      border: none;
      font-size: 2rem;
      font-weight: 700;
      color: #314099;
      box-shadow: 0px 4px #656569;
    }
    .special {
      display: grid;
      align-items: center;
      gap: 1.5rem;
      grid-template-columns: 1fr 1fr;
      button {
        width: 225px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .header {
      width: 330px;
      height: 50px;
      display: flex;
      align-items: end;
      justify-content: space-between;
      margin-bottom: 30px;
      .logo {
        font-size: 2rem;
        font-weight: 700;
        color: white;
      }
      .theme {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;
        .themes {
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 0.7rem;
          color: white;
          font-weight: 700;
          padding: 2px 6px;
          text-align: center;
          letter-spacing: 5px;
        }
        .theme-selection {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
        }
        .toggle {
          width: 70px;
          height: 26px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          padding: 5px;
          background-color: #242e42;
          .ball {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color: #9c4549;
          }
        }
      }
    }
    .screen {
      width: 327px;
      height: 88px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: end;
      background-color: #191f32;
      margin-bottom: 24px;
      input {
        width: 100%;
        border-radius: 15px;
        padding: 0.5rem;
        height: 90%;
        text-align: end;
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 4rem;
        color: white;
        line-height: 40px;
        font-weight: 700;
      }
    }
    .dail-pad {
      width: 327px;
      height: 414px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 30px;
      background-color: #252d44;
      .keys {
        width: 325px;
        height: 382px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        place-items: center;
        justify-content: space-between;
      }
      button {
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        width: 58px;
        height: 58px;
        background-color: #e9e3dc;
        border-radius: 10px;
        border: none;
        font-size: 1.2rem;
        font-weight: 700;
        color: #314099;
        box-shadow: 0px 4px #656569;
      }
      .special {
        display: grid;
        align-items: center;
        gap: 1.5rem;
        grid-template-columns: 1fr 1fr;
        button {
          width: 138px;
        }
      }
    }
  }
`;

export default CalculatorApp;
