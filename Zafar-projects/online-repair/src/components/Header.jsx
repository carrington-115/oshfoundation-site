import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link to="/" className="logo">
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Link className="contact-btn" to="/">
        Contact us
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-around;
  gap: 50%;
  align-items: center;
  @media (min-width: 320px) and (max-width: 599px) {
    gap: 0;
  }
  .logo {
    width: 200px;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 120px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .contact-btn {
    text-decoration: none;
    background-color: white;
    color: var(--primary);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
    border: 1px solid transparent;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 14px;
    }
    &:hover {
      color: white;
      border-color: white;
      background-color: transparent;
    }
  }
`;
