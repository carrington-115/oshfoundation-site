import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ServiceInfo from "./components/ServiceInfo";

const Home = () => {
  return (
    <Container>
      <Header />
      <section className="page-intro">
        <div className="text-content">
          <h4>Welcome To Online Geek Protection</h4>
          <h1>
            Setup, Installation & <br />
            Repair By Squad of Geeks
          </h1>
          <h4>Best Online Tech Help for Computers & Home Appliances</h4>
          <button>Call now (858) 433-6542</button>
        </div>
        <div className="backdrop" />
      </section>
      <section className="details">
        <h1>
          Subscribe To Protection Plan For All Digital Devices Online Geek
          Protection By Squad Of Geeks
        </h1>
        <p>
          With the enhanced features and benefits for your device, we offer
          high-level protection plans. These plans vary correspondingly with the
          products and services you choose. Geek appoints thousands of company
          professionals to handle your device with the latest approach and
          optimum output. We deal with all computing, electronics and electrical
          devices. We offer this protection plan on a monthly and yearly basis.
          There is an option to enjoy the extended warranty seamlessly for many
          years. There are separate Protection Plans for different devices. You
          can prefer the online and offline process to connect with the plans.
        </p>
      </section>
      <ServiceInfo />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  .page-intro {
    height: 80vh;
    width: 100vw;
    background: url("/images/image1.svg");
    background-position: fixed;
    position: relative;
    .text-content {
      bottom: 1cm;
      position: absolute;
      left: 8%;
      z-index: 10;
      color: white;
      h4 {
        font-size: 24px;
        font-weight: 100;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 24px;
        }
      }
      h1 {
        font-size: 64px;
        font-weight: 500;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 48px;
        }
      }
      button {
        background-color: white;
        color: var(--primary-color);
        padding: 10px 30px;
        font-size: 24px;
        border: 3px;
        border: none;
      }
    }
    .backdrop {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100;
      z-index: 1;
      background-image: var(--backdrop-gradient);
    }
  }
  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5cm 0;
    background-color: var(--primary-color);
    color: white;
    h1 {
      font-size: 48px;
      font-weight: 500;
      width: 80%;
      line-height: 50px;
    }
    p {
      font-size: 24px;
      font-weight: 200;
      width: 80%;
    }
  }
`;
