import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Data from "../data.json";
import styled from "styled-components";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState(Data);

  const handleRegion = async (e) => {
    const region = e.target.value;
    if (region != "") {
      const reg = Data.filter((country) => {
        return country.region === region;
      });
      setData(reg);
    } else {
      setData(Data);
    }
  };
  return (
    <Container>
      <div className="filter">
        <form className="search">
          <IoSearchSharp className="search-icon" />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => {
              const reg = Data.filter((country) => {
                return country.name
                  .toLowerCase()
                  .match(e.target.value.toLowerCase());
              });
              setData(reg);
            }}
          />
        </form>
        <div className="drop-down">
          <select name="Region" id="region" onClick={handleRegion}>
            <option value="" selected disabled hidden>
              Filter By Region
            </option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries">
        {data &&
          data.map((country, index) => {
            return (
              <div className="country" key={index}>
                <div className="flag">
                  <img src={country.flags.png} alt="" />
                </div>
                <div className="details">
                  <h3>{country.name}</h3>
                  <p>
                    Population <span>{country.population}</span>
                  </p>
                  <p>
                    Region <span>{country.region}</span>
                  </p>
                  <p>
                    Capital <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 942px;
  padding: 80px;
  padding-top: 40px;
  background-color: #fafafa;
  ::-webkit-scrollbar {
    display: none;
  }
  .filter {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search {
      width: 480px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 10px;
      background-color: #ffffff;
      .search-icon {
        font-size: 1.5rem;
        margin-left: 2rem;
      }
      input {
        width: 85%;
        height: 54px;
        border: none;
        outline: none;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 10px;
      }
    }
    .drop-down {
      width: 215px;
      height: 100%;
      border-radius: 10px;
      padding: 8px;
      background-color: #ffffff;
      select,
      select option {
        width: 90%;
        height: 100%;
        padding: 1rem;
        color: black;
        font-size: 1rem;
        font-weight: 600;
        line-height: 66px;
        outline: none;
        border: none;
      }
    }
  }
  .countries {
    margin-top: 40px;
    overflow-y: scroll;
    height: 746px;
    width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    .country {
      width: 275px;
      height: 335px;
      border-radius: 10px;
      background-color: #ffffff;
      .flag {
        width: 100%;
        height: 158px;
        img {
          aspect-ratio: 6.5/4;
          width: 100%;
        }
      }
      .details {
        width: 100%;
        height: 175px;
        padding: 2rem;
        h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 10px;
        }
        p {
          font-weight: 700;
          font-size: 18px;
          span {
            font-weight: 400;
          }
        }
      }
    }
  }
`;
export default Body;
