import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <PageLink to="/" logo={true}>
        <div className="logo">
          <img src="/images/logo.png" alt="oasis-of-hope-logo" />
        </div>
      </PageLink>
      <nav>
        <PageLink to="/" logo={false}>
          Home
        </PageLink>
        <PageLink to="aboutus" logo={false}>
          About us
        </PageLink>
        <PageLink to="services" logo={false}>
          Services
        </PageLink>
        <PageLink to="blog" logo={false}>
          Blog
        </PageLink>
        <PageLink to="contactus" logo={false}>
          Contact us
        </PageLink>
        <button className="partner">Become a Partner</button>
      </nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 1cm 10px 1cm;
  position: fixed;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 100%;
  left: 0
  right: 0;
  top: 0;
  z-index: 50;
  height: 2cm;
  nav {
    margin-top: 0.5cm;
    margin-right: 5cm;
    button {
      background-color: rgb(111, 192, 111);
      padding: 0.25cm 0.5cm;
      font-size: 20px;
      border: 1px solid transparent;
      color: white;
      cursor: pointer;
      margin-bottom: 1cm;
      border-radius: 20px;
      &:hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .logo {
    width: 13vw;
    margin-top: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const PageLink = styled(Link)`
  text-decoration: none;
  margin: 0 15px;
  font-size: 20px;
  padding-bottom: 5px;
  color: green;
  border-bottom: 2px solid transparent;
  &:hover {
    color: black;
    border-bottom-color: ${(props) => (props.logo ? "transparent" : "green")};
  }
`;
