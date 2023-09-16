import React from "react";
import styled from "styled-components";

const services = [
  { icon: "/images/icon1.svg", description: "Wear and tear of the device" },
  { icon: "/images/icon2.svg", description: "Software Maintenance" },
  { icon: "/images/icon3.svg", description: "Transferable Services" },
  { icon: "/images/icon4.svg", description: "Data Removal Services" },
  { icon: "/images/icon5.svg", description: "Backup Services" },
  { icon: "/images/icon6.svg", description: "Power Surge Services" },
  { icon: "/images/icon7.svg", description: "Hardware Maintenance Services" },
  { icon: "/images/icon8.svg", description: "Accidental Damage" },
  { icon: "/images/icon9.svg", description: "Water Damage" },
  { icon: "/images/icon10.svg", description: "Reinstallation Services" },
  { icon: "/images/icon11.svg", description: "Networking Services" },
  { icon: "/images/icon12.svg", description: "Computing Services" },
  { icon: "/images/icon13.svg", description: "Repairing Services" },
  { icon: "/images/icon14.svg", description: "Mounting Services" },
  {
    icon: "/images/icon15.svg",
    description: "Setup and Installation Services",
  },
];
const ServiceInfo = () => {
  return (
    <Container>
      <div className="inner-section">
        <section className="section-1">
          <div className="top">
            <h1>
              We Make Devices Run Like New - Book Appointment With Our Geek Now
            </h1>
            <p>
              There is always satisfaction in the minds of the people relating
              to the services that they can enjoy by applying to the protection
              plans. Following up with these plans from scratch, always makes
              your device run like a new one. There is an overall development
              and maintenance of the device under these plans. These plans help
              you to protect from any problem within your product including.
            </p>
          </div>
          <div className="bottom">
            {services.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.icon} alt="" />
                <h2>{item.description}</h2>
              </div>
            ))}
          </div>
        </section>
        <aside>
          <div className="section-1">
            <h3>Getting help is easy</h3>
            <p>
              Instant Repair Services Required? Have questions? Geek Care is
              available 24/7
            </p>
            <button>chat with live agent</button>
            <p>or</p>
            <h4>Call Now (858) 433-6542</h4>
          </div>
          <div className="section-2">
            <h3>In-store</h3>
            <p>
              Contact the geek care team to get the remote support for your
              devices online.
            </p>
            <button>Book and appointment</button>
          </div>
          <div className="section-3">
            <h3>In Home</h3>
            <p>
              Get setup, tune-up, installation and diagnostic services for your
              products.
            </p>
            <p>Call Now (858) 433-6542</p>
          </div>
          <div className="section-4">
            <img src="/images/customer.svg" alt="" />
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default ServiceInfo;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1cm 0;
  .inner-section {
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
    }
    .section-1 {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
      }
      .top {
        width: 100%;
        h1 {
          padding: 0.5cm 1.5cm;
          background-color: var(--primary-color);
          color: white;
          font-size: 36px;
          font-weight: 300;
          margin-bottom: 0.5cm;
          border-radius: 10px;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 24px;
          }
        }
        p {
          font-size: 20px;
          font-weight: normal;
        }
      }
      .bottom {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 1cm;
        @media (min-width: 320px) and (max-width: 599px) {
          grid-template-columns: repeat(2, 1fr);
        }
        .item {
          border: 1px solid black;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5cm 0;
          border-radius: 10px;
          img {
            width: 50%;
          }
          svg {
            fill: white;
            color: white;
          }
          h2 {
            font-size: 24px;
            text-align: center;
            width: 80%;
            padding: 1cm 0;
          }
        }
      }
    }
    aside {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1cm;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
        margin-top: 2cm;
      }
      .section-1,
      .section-2,
      .section-3 {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        h3 {
          width: 100%;
          text-align: center;
          background-color: var(--primary-color);
          color: white;
          font-size: 24px;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 36px;
          }
        }
        p {
          text-align: center;
          font-size: 20px;
          margin: 0.5cm 0;
        }
        button {
          font-size: 18px;
          padding: 5px 10px;
          background-color: var(--primary-color);
          color: white;
          border: 1px solid transparent;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 24px;
          }
          &:hover {
            background-color: transparent;
            color: var(--primary-color);
            border-color: var(--primary-color);
          }
        }
      }
      .section-4 {
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }
`;
