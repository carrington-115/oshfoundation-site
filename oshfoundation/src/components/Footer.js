import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <div className="vision">
        <h3>
          Vision <hr /> <br />
          Oasis of Hope Association (OHA) has a mission "until no girl is
          hopeless". We have a centered vission to empower the girl child,
          combat gender-based violence, protection of the girl child from every
          form of violence.
        </h3>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="join-form">
        <h1>
          <br /> Join Now
        </h1>
        <input className="email" type="email" placeholder="Email" />
        <input className="password" type="password" placeholder="Password" />
        <div className="btns">
          <button className="signin-btn">Sign in</button>
          <button className="create-account">Create Account</button>
        </div>
      </div>
      <div className="pages">
        <h1>
          Pages
          <hr />
        </h1>
        <Pages to="/">Home</Pages>
        <Pages to="aboutus">About us</Pages>
        <Pages to="services">Services</Pages>
        <Pages to="blog">Blog</Pages>
        <Pages to="contactus">Contactus</Pages>
      </div>
      <div className="Links">
        <div className="forms">
          <p>
            Forms <hr />
          </p>
          <a className="form" href="">
            Contact
          </a>
          <a className="form" href="">
            Become a partner
          </a>
        </div>
        <div className="handles">
          <a
            href="https://www.facebook.com/profile.php?id=100066337793529"
            className="facebook"
          >
            <div className="handle-image">
              <img src="/images/handles/facebook.png" alt="facebook logo" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mbah-tracy-b659b1248"
            className="linkedin"
          >
            <div className="handle-image">
              <img src="/images/handles/linkedin.png" alt="Linkedin logo" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mbah-tracy-b659b1248"
            className="instagram"
          >
            <div className="handle-image">
              <img src="/images/handles/instagram.png" alt="instagram logo" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mbah-tracy-b659b1248"
            className="youtube"
          >
            <div className="handle-image">
              <img src="/images/handles/youtube.png" alt="Youtube logo" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/mbah-tracy-b659b1248"
            className="facebook"
          >
            <div className="handle-image">
              <img src="/images/handles/twitter.png" alt="twitter logo" />
            </div>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; Oasis Of Hope Association (OHA) 2022</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  display: flex;
  align-items: center;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top: 0.5px solid grey;
  padding: 0.25cm 1cm 1cm 1cm;
  .vision {
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1cm;
    h3 {
      width: 100%;
      font-size: 1.5em;
      font-family: times new roman;
      text-align: justify;
      font-weight: none;
      color: rgba(0, 0, 0, 0.8);
    }
    button {
      width: 50%;
      padding: 0.25cm 0;
      font-size: 1em;
      background-color: rgb(111, 192, 111);
      color: white;
      margin-right: 0.5cm;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        border-color: black;
        color: black;
      }
    }
  }
  .join-form {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1cm;
    h1 {
      width: 100%;
      font-size: 30px;
      font-family: cambria;
      text-align: center;
      margin-bottom: 10px;
      color: rgb(4, 143, 16);
    }
    input {
      width: 80%;
      margin-bottom: 5px;
      font-size: 18px;
      height: 1.2cm;
      padding-left: 1em;
      background-color: rgba(4, 143, 16, 0.1);
      border: 1px solid black;
      border-radius: 3px;
    }
    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      .signin-btn,
      .create-account {
        padding: 0.25cm 0.5cm;
        border: 1px solid transparent;
        cursor: pointer;
        font-size: 18px;
        border-radius: 2px;
        margin-bottom: 10px;
      }
      .create-account {
        background-color: white;
        color: black;
        border-color: black;
        &:hover {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
          border-color: green;
          color: green;
        }
      }
      .signin-btn {
        background-color: rgb(111, 192, 111);
        color: white;
        margin-right: 0.5cm;
        &:hover {
          border-color: black;
          color: black;
        }
      }
    }
  }
  .pages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1cm;
    h1 {
      font-family: times new roman;
      font-size: 1.5em;
      margin-bottom: 5px;
    }
  }
  .Links {
    .handles {
      display: flex;
      justify-content: space-between;
      a {
        .handle-image {
          width: 1.5cm;
          img {
            width: 80%;
            height: 100%;
          }
        }
      }
    }
  }
  .forms {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5cm;
    a,
    p {
      text-decoration: none;
      font-family: times new roman;
      font-size: 1.5em;
    }
    a {
      color: black;
      &:hover {
        color: green;
      }
    }
  }
`;

let Pages = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: times new roman;
  font-size: 1.2em;
  margin-bottom: 5px;
  &:hover {
    color: green;
  }
`;
