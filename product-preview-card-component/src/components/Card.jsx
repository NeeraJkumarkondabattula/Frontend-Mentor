import React from "react";
import desktop from "../Assests/image-product-desktop.jpg";
import mobile from "../Assests/image-product-mobile.jpg";
import styled from "styled-components";
import cart from "../Assests/icon-cart.svg";

const Card = () => {
  return (
    <Container>
      <div className="left-side">
        <img src={window.innerWidth < 400 ? mobile : desktop} alt="" />
      </div>
      <div className="right-side">
        <h4>PERFUME</h4>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuos interpretation composed by Olivier
          Ploge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <div className="final-price">$149.99</div>
          <div className="discount">$169.99</div>
        </div>
        <button>
          <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
              fill="#FFF"
            />
          </svg>
          Add Cart
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  height: 450px;
  border-radius: 10px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .left-side img {
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: 10px 0 0 10px;
    overflow: hidden;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
  }

  .right-side h4 {
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 5px;
    color: hsl(228, 12%, 48%);
  }

  .right-side h1 {
    font-size: 2rem;
    font-family: "Fraunces";
    color: hsl(212, 21%, 14%);
    font-weight: 700;
  }

  .right-side p {
    font-size: 0.78rem;
    line-height: 20px;
    letter-spacing: 0.2px;
    word-spacing: 2.5px;
    color: hsl(228, 12%, 48%);
  }

  .price {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .price .final-price {
    font-family: "Fraunces";
    font-size: 35px;
    color: hsl(158, 36%, 37%);
  }
  .price .discount {
    text-decoration: line-through;
    font-size: 14px;
    color: hsl(228, 12%, 48%);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 50px;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight: 700;
    background-color: #0c5f0c;
  }
  @media screen and (max-width: 400px) {
    width: 345px;
    height: 615px;
    display: flex;
    flex-direction: column;

    .left-side img {
      width: 100%;
      height: 245px;
      /* aspect-ratio: 7/5; */
      border-radius: 10px 10px 0 0;
      overflow: hidden;
    }

    .right-side {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem;
    }
  }
`;

export default Card;
