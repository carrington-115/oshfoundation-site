import React from "react";
import styled from "styled-components";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BsFillChatFill } from "react-icons/bs";

const services = [
  { title: "Computer & Tablets", image: "/images/icon1.svg" },
  { title: "WiFi Printer Setup & Driver", image: "/images/icon2.svg" },
  { title: "Computer Setup", image: "/images/icon3.svg" },
  { title: "Computer Tun up & Update", image: "/images/icon4.svg" },
  { title: "PC Virus Protection", image: "/images/icon5.svg" },
  { title: "Printer Offline", image: "/images/icon2.svg" },
  { title: "Major Appliance", image: "/images/icon6.svg" },
  { title: "Camera & Camcoders", image: "/images/icon7.svg" },
  { title: "Portable Audio", image: "/images/icon8.svg" },
  { title: "Wearables", image: "/images/icon9.svg" },
  { title: "Drones", image: "/images/icon10.svg" },
  { title: "Drones", image: "/images/icon10.svg" },
];

function Home() {
  return (
    <Container>
      <header>
        <div className="contact">
          <img src="/images/usa.svg" alt="" />
          <p>+1-800-945-2757</p>
        </div>
      </header>
      <section className="services">
        <div className="inner-section">
          <div className="top">
            <h1>Schedule a Service</h1>
            <p>
              Book your appointment for repair, installation, troubleshooting,
              or device pickup.
            </p>
          </div>
          <div className="bottom">
            {services.map((item, index) => (
              <div className="item">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="inner-section">
          <div className="item">
            <AiFillSchedule size={50} />
            <p>Manage your appointment</p>
          </div>
          <div className="item">
            <BsFillChatFill size={50} />
            <p>Chat with Agent</p>
          </div>
          <div className="item">
            <IoMdCall size={50} />
            <p>1800 209 3714</p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy;Online repair store - 2023 All rights Reserved</p>
      </footer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  header {
    width: 100%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5cm 0;
    .contact {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      gap: 10px;
      img {
        width: 48px;
        height: 48px;
      }
      p {
        font-size: 24px;
        color: white;
      }
    }
  }
  .services {
    width: 100%;
    display: flex;
    margin: 1cm 0;
    justify-content: center;
    align-items: center;

    .inner-section {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5cm;
        h1 {
          font-size: 36px;
          color: black;
          font-weight: 300;
        }
        h1 {
          font-size: 24px;
          color: black;
          font-weight: 100;
        }
      }
      .bottom {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 5%;
        row-gap: 0.5cm;
        margin-top: 1cm;
        @media (min-width: 320px) and (max-width: 599px) {
          grid-template-columns: repeat(3, 1fr);
        }
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5cm 0.25cm;
          border: 1px solid black;
          border-radius: 10px;
          gap: 10px;
          cursor: pointer;
          img {
            width: 80%;
          }
          p {
            width: 90%;
            font-size: 14px;
            text-align: center;
            font-weight: normal;
            color: black;
          }
          &:hover {
            img {
              width: 40%;
            }
            transition: all 0.25s 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
          }
        }
      }
    }
  }
  .contact-section {
    width: 100%;
    background-image: url("/images/image1.svg");
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1cm 0;
    padding: 3cm 0;
    @media (min-width: 320px) and (max-width: 599px) {
      padding: 1.5cm 0;
    }
    .inner-section {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 320px) and (max-width: 599px) {
        flex-direction: column;
        align-items: center;
        gap: 1cm;
      }
      .item {
        display: flex;
        color: white;
        align-items: center;
        gap: 10px;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
        p {
          font-size: 30px;
          font-weight: 500;
          @media (min-width: 320px) and (max-width: 599px) {
            text-align: center;
          }
        }
      }
    }
  }
  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: white;
    padding: 2cm 0;
    p {
      font-size: 20px;
      font-weight: 300;
      width: 80%;
      text-align: center;
    }
  }
`;
