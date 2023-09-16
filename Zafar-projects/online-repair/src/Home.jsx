import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ServiceInfo from "./components/ServiceInfo";

const terms = [
  {
    title: "Protection Plan",
    description:
      "The plan covers the protection of your device from malicious activities, software and hardware faults, and other errors generated from time to time.",
  },
  {
    title: "Replacement Plan",
    description:
      "This plan deals with the replacement of the products, gadgets or devices which needs to be replaced by a new one. Claim for the device in the initial step and provide the contract ID number and SKU details. Get the email confirmation by sending the defective product, and replacing it with a new one using the Gift card.",
  },
  {
    title: "Home membership Plan",
    description:
      "This plan helps you to secure all the smart and other devices present in your home. It helps you to retain your luxurious feel at home with the best running devices and appliances. The agents work in a fast forward way to handle all the requests under this plan.",
  },
  {
    title: "Accidental Damage Protection Plan",
    description:
      "This plan covers all the repairing and maintenance work to recover your product from any accidental damage. You can endlessly rely on the Protection Plan for any damage to your device.",
  },
  {
    title: "Total Protection Plan",
    description:
      "This plan includes the overall protection of your device, including setup and installation, repairing, maintenance, protection, antivirus, etc. You can relax and use your product with full access.",
  },
  {
    title: "Protection For Wireless Products",
    description:
      "The best-in-class technicians help to protect your device and gadgets that work under wireless support. It helps to maintain the integrity of the network.",
  },
  {
    title: "Online Payment Protection",
    description:
      "This plan helps you to protect all your online payments comprising of credit card details, sensitive account information, phone number, PIN and password details. It keeps you out of unauthorized access to your confidential information.",
  },
];
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
      <section className="privacy">
        <div className="top">
          <h1>Tranquill claim for protection under budget</h1>
          <p>
            Now, follow up with the simple procedure to choose the plan that is
            best for you and subscribe to that plan. Always decide the plan
            according to the device for which you want any protection, and its
            corresponding services. Avail of the services monthly, quarterly or
            annually as per suitability. Our team integrates itself with the
            best service agents and works for the overall maintenance of your
            device. The various protection plans are as follows:
          </p>
        </div>
        <div className="bottom">
          {terms.map((item, index) => (
            <div className="item" key={index}>
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
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
          font-size: 20px;
        }
      }
      h1 {
        font-size: 64px;
        font-weight: 500;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 40px;
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
  .privacy {
    width: 100%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2cm 0;
    .top,
    .bottom {
      width: 80%;
    }
    .top {
      h1 {
        font-size: 48px;
        font-weight: 500;
      }
      p {
        font-size: 24px;
        font-weight: 100;
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-top: 1cm;
      .item {
        display: flex;
        width: 100%;
        font-size: 18px;
        color: white;
        font-weight: 100;
        border: 1px solid white;
        .title {
          width: 30%;
          border: 1px solid white;
          padding: 0.5cm;
        }
        .description {
          width: 70%;
          border: 1px solid white;
          padding: 0.5cm;
        }
      }
    }
  }
`;
