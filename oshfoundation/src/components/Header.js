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
  box-shadow: 0.5px 0.5px 2px black;
  width: 100%;
  left: 0
  right: 0;
  top: 0;
  background-color: white;
  z-index: 50;
  height: 1.25cm;
  nav {
    margin-right: 2.5cm;
  }
  .logo {
    width: 15vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const PageLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  font-size: 12.5px;
  padding-bottom: 5px;
  color: green;
  border-bottom: 2px solid transparent;
  &:hover {
    color: black;
    border-bottom-color: ${(props) => (props.logo ? "transparent" : "green")};
  }
`;
