import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Footer from "../components/Footer";

function Services() {
  return (
    <ServicesContainers>
      <Content>
        <div className="content">
          <p className="service-intro">
            <h1>
              SERVICES <hr />
            </h1>
            &nbsp; &nbsp; Oasis of Hope is out to empower young girls and women
            between the ages of 15 - 35 years old by providing the following
            services:
          </p>
          <ServicesOptions
            heading="Data collection"
            bodyContent="We are identifying and collecting data 
            about young women and single mothers between 15-35 years old to tackle their c
            hallenges through young girl empowerment, reprodcutiion health, entrepreneurship,
            counselling, orientation, and motivation."
          />
          <ServicesOptions
            heading="Solution provision"
            bodyContent="We also empower these girls by Mobilizing, guiding, and facilitating 
            solutions to them both in the short and long run. For example, We carried out a 
            campaign where we mobilized young girls and women by helping them to collect their 
            biometric card that has been put in place by the ministry of youth and civic 
            education. This card helps them to acquire some goods and services at cheaper cost."
          />
          <ServicesOptions
            heading="Employment"
            bodyContent="We also realize some projects where we trained young women how to 
            produce and sell so they can be financially independent and stable. For example,
            peanuts, chewables, Home-made yoghurt etc. We also help them find some temporary 
            jobs like house keeping and nannies."
          />
          <ServicesOptions
            heading="Health education"
            bodyContent="We also organize health seminars where we 
            distribute sanitary pads and we also teach young girls and women about their 
            menstrual cycles. We also organize campaigns where we move in communities with 
            specialist (especially the under-represented communities) and teach  young girls 
            and women about health topics like, menstrual cycle, birth control methods, and 
            sexual transmissible diseases. We also empower them with other topics like 
            creativity, beauty tips, decoration, body care, hair dressing. We do further 
            follow up by organizing other programs which is targetted towards wrestling 
            against HIV/AIDS by sharing prevention methods."
          />
          <ServicesOptions
            heading="Mentorship"
            bodyContent="We mentor them and help them discover their inner talents 
            and bring out the best in them. We also help them by teaching them their rights so 
            they can overcome fear of violence, lack of education, forceful mariages, and about
            decision making. We also mentor them to realizing their dreams through project 
            starting and development programs and business mentorship sessions."
          />
          <section id="subscribe">
            <h1>
              If have not yet joined our Community?
              <br /> Join Now and be the first to know anything about us.
            </h1>
            <input className="email" type="email" placeholder="Email" />
            <input
              className="password"
              type="password"
              placeholder="Password"
            />
            <div className="btns">
              <button className="signin-btn">Sign In</button>
              <button className="create-account">Create Account</button>
            </div>
          </section>
        </div>
        <aside>Aside Here!</aside>
      </Content>
      <Footer />
    </ServicesContainers>
  );
}

function ServicesOptions(props) {
  return (
    <Fade bottom>
      <Options>
        <div className="container">
          <div className="heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="body-text">
            <p>&nbsp; &nbsp; {props.bodyContent}</p>
          </div>
          <div className="continue-btns">
            <button className="contact">Contact us</button>
            <a href="#subscribe" className="join">
              Join Our Community
            </a>
          </div>
        </div>
      </Options>
    </Fade>
  );
}

export default Services;

const ServicesContainers = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 2cm;
`;

const Content = styled.div`
  background-color: rgba(236, 255, 233, 0.8);
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-top: 1cm;
  .content,
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: times new roman;
    heigth: 100vh;
  }
  .content {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .service-intro {
      font-size: 25px;
      padding: 0 2cm;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1cm;
      margin-bottom: 1cm;
      h1 {
        text-align: center;
        font-size: 35px;
        width: 50%;
        margin-bottom: 0.5cm;
      }
    }
    #subscribe {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      padding: 1cm;
      margin-bottom: 1cm;
      width: 70%;
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
      .btns {
        display: flex;
        justify-content: center;
        align-items: center;
        .signin-btn,
        .create-account {
          padding: 0.25cm 0.5cm;
          border: 1px solid transparent;
          cursor: pointer;
          font-size: 20px;
          border-radius: 2px;
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
  }
  aside {
    width: 30%;
  }
`;

const Options = styled.section`
  margin-left: 2cm;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1cm;
    background-color: rgba(0, 0, 0, 0.2);
    width: 80%;
    padding: 1cm 0.5cm;
    border-radius: 20px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
    .heading {
      h1 {
        margin-bottom: 20px;
        font-size: 30px;
        background-color: green;
        color: white;
        padding: 0.25cm 1cm;
        border-radius: 10px;
      }
    }
    .body-text {
      width: 80%;
      p {
        font-size: 25px;
        line-height: 1cm;
        text-align: justify;
      }
    }
    .continue-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      button,
      a {
        padding: 0.25cm 0.5cm;
        font-size: 20px;
        border: 1px solid transparent;
        cursor: pointer;
        margin-bottom: 0.25cm;
      }
      .contact {
        background-color: rgb(111, 192, 111);
        color: white;
        &:hover {
          border-color: black;
          color: black;
        }
      }
      .join {
        background-color: white;
        color: black;
        border: 1px solid black;
        text-decoration: none;
        &:hover {
          color: white;
          background-color: rgb(111, 192, 111);
          border-color: transparent;
        }
      }
    }
  }
`;
