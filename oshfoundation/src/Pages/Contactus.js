import React from "react";
import styled from "styled-components";

function Contactus() {
  return (
    <Container>
      <section className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfRQZKg2rcV4iI9Nu4aZS9pfekYjIiYrUFKWvXX2hE83l9mVw/viewform?embedded=true"
          width="640"
          height="1100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </section>
      <section className="subscribe">
        <h1>
          If have not yet joined our Community?
          <br /> Join Now and be the first to know anything about us.
        </h1>
        <input className="name" type="text" placeholder="Name" />
        <input className="email" type="email" placeholder="Email" />
        <button>Join Now</button>
      </section>
    </Container>
  );
}

export default Contactus;

const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 4cm;
  background-color: rgba(236, 255, 233, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 1cm;
    margin-bottom: 1cm;
    width: 50%;
    h1 {
      width: 70%;
      font-size: 2em;
      font-family: cambria;
      text-align: center;
      margin-bottom: 10px;
      color: rgb(4, 143, 16);
    }
    input {
      width: 10cm;
      margin-bottom: 10px;
      height: 1.25cm;
      font-size: 1.25em;
      padding-left: 1em;
      background-color: rgba(4, 143, 16, 0.1);
      border: 1px solid black;
      border-radius: 3px;
    }
    button {
      width: 5cm;
      font-size: 1.5em;
      border-color: transparent;
      padding: 0.25cm;
      color: white;
      background-color: rgb(4, 143, 16);
      cursor: pointer;
      border-radius: 2px;
      border: 1px solid transparent;
      &:hover {
        color: black;
        border-color: black;
        background-color: white;
      }
    }
  }
`;
