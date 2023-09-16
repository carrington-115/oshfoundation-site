import React from "react";
import styled from "styled-components";

const offers = [
  {
    image: "/images/category1.svg",
    title: "Kitchen Appliances",
    content:
      "Refrigerator, Dish Washer, Microwave, Purifier, Dryer, Heater, Oven, Cookers, Coffee Machines, Cookware and Bake-ware, Small Kitchen Appliances",
  },
  {
    image: "/images/category2.svg",
    title: "Car Electronics",
    content: "Car Seats, Remote Controls Smart car systems",
  },
  {
    image: "/images/category3.svg",
    title: "Cell Phones",
    content:
      "Mobile Phones and their accessories, Phone Bluetooth, Phone Speakers, Phone Cameras",
  },
  {
    image: "/images/category4.svg",
    title: "Computers and Tablets",
    content:
      "Computers, Tablets, Desktops, Laptops, Monitors, Printers, Scanners, Networking Device, Storage Device, Software Devices, eReaders",
  },
  {
    image: "/images/category5.svg",
    title: "Cameras and Camcorders",
    content:
      "DSLR Camera, Mirrorless Camera, Lenses, Superzoom Cameras, Tough Cameras, Camera Accessories",
  },
  {
    image: "/images/category6.svg",
    title: "Smart Home Devices",
    content:
      "DSLR Camera, Mirrorless Camera, Lenses, Superzoom Cameras, Tough Cameras, Camera Accessories",
  },
];
const SpecialOffer = () => {
  return (
    <Container>
      <div className="top-section">
        <h1>
          Protect Your Devices At Home or Office – Choose the Best Plan For Your
          Device
        </h1>
        <p>
          You can increase the lifetime of your device by protecting it under
          the hands of experts and skilled professionals. There is a long list
          of devices that you can protect using these protection plans.
          Subscribe for the Protection Plans for the list of the device below:
        </p>
      </div>
      <div className="bottom">
        {offers.map((item, index) => (
          <div className="item">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SpecialOffer;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1cm 0;
  .top-section {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 36px;
      font-weight: 500;
      width: 100%;
    }
    p {
      font-size: 24px;
      font-weight: normal;
      width: 100%;
    }
  }
  .bottom {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1cm;
    row-gap: 0.5cm;
    gap: 1cm;
    @media (min-width: 320px) and (max-width: 599px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      border-radius: 20px;
      background-color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      gap: 10px;
      img {
        width: 100%;
        border-radius: 20px;
      }
      h3 {
        font-size: 24px;
        font-weight: normal;
        text-align: center;
        width: 90%;
      }
      p {
        font-size: 15px;
        font-weight: 100;
        text-align: center;
        width: 90%;
      }
    }
  }
`;
