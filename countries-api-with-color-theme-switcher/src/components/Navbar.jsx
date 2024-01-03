import React from "react";
import { IoIosMoon } from "react-icons/io";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <div className="left-nav">
        <h1>Where in the world?</h1>
      </div>
      <div className="right-nav">
        <IoIosMoon />
        <h4>Dark Mode</h4>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  .left-nav {
    color: #131416;
  }
  .right-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #131416;
  }
`;

export default Navbar;
