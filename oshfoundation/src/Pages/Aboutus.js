import React from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Footer from "../components/Footer";

function Aboutus() {
  return (
    <Container>
      <Content>
        <div className="content">
          <section className="vision-part">
            <div className="vision-img">
              <img src="/images/oshyde.jpg" alt="vision1 image" />
            </div>
            <h1 className="heading">OUR VISION</h1>
            <p className="vision-intro">
              &nbsp; &nbsp; Oasis of Hope Association (OHA) has a mission "until
              no girl is hopeless". We have a centered vission to empower the
              girl child, combat gender-based violence, protection of the girl
              child from every form of violence. We have a mission to help young
              girls articulate their thoughts and we help them in decision
              making. We are out to ensure that the young girl has their own
              voice, their opinion, and ensure that their voice be heard.
              <br />
              &nbsp;&nbsp; Oasis of Hope is out to empower young girls by the
              following ways:
            </p>

            <div className="vision-box">
              <Vision
                heading="Decision Making"
                imgsrc="/images/decision-making.png"
                imgalt="decision making icon"
                description=" Through this empowerment, Oasis of hope will build the
                understanding in the mind of a young girl to know that her
                decisions matters in her own life. This empowerment will help
                her tackle their challenges and create opportunities through
                her personal decisions."
              />
              <Vision
                heading="Confidence"
                imgsrc="/images/confident.png"
                imgalt="confidence icon"
                description="We will build the confidence in her to have a sense of place
                in the world and have aspirations and hope for the future."
              />
              <Vision
                heading="Vision"
                imgsrc="/images/vision.png"
                imgalt="decision making icon"
                description="We have the vision to emmpower young girls to bring people
                together for something , teach them the necessary steps to
                turn the idea into a real-world result, and play and active
                role in the community."
              />
            </div>
          </section>
          <section className="founder-biography">
            <div className="founder-part1">
              <div className="founder-image">
                <img src="/images/founder2.jpg" alt="founder image" />
              </div>
              <div className="founder-text">
                <p>
                  &nbsp; &nbsp; While growing up I noticed that I am passionate
                  about tackling challenges of young women in my community. My
                  vision became more clearer in 2015 after my university
                  diploma. On trying to carry out the problem validation, I
                  found out that many of my female classmates dropped out of
                  school and I became curious to know the reasons. I noticed
                  that many suffered Gender base violence, unwanted pregnancies,
                  early and forceful marriages at their teenage ages.
                </p>
              </div>
            </div>
            <p className="continuation-text">
              &nbsp; &nbsp;I discovered that my community needed someone to
              tackle these challenges of young women, and I was that person. So,
              I started empowering them through counseling, orientation,
              mentorship, reproductive health, motivation and funding small
              projects, giving sanitary pads, etc. Giving back to my community
              and putting a smile on other's faces gives me intrinsic
              satisfaction and " I'm relentless until no girl is hopeless".
            </p>
          </section>
          <div className="team">
            <h1>
              The Team <hr />
            </h1>
          </div>
          <Organization />
          <div className="join-team">
            <p>Do you want to be a part of this Team?</p>
            <button>Leave us a message</button>
          </div>
          <div className="join-team">
            <p>Do you want to Partner with us? Let us know.</p>
            <button>Partner with us</button>
          </div>
          <section className="subscribe">
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
        <aside>Aside content here!</aside>
      </Content>
      <Footer />
    </Container>
  );
}

function Vision(props) {
  return (
    <VisionContainer>
      <h1>{props.heading}</h1>
      <div className="icon-container">
        <img src={props.imgsrc} alt={props.imgalt} />
      </div>
      <div className="vision-text">
        <p>{props.description}</p>
      </div>
    </VisionContainer>
  );
}
function Organization() {
  return (
    <OrganContainer>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/founder2.jpg" alt="founder" />
          </div>
          <div className="text">
            <p>
              Mbah Tifuh Epse Mokom Tembock, Founder of Oasis of Hope
              Association (OHA), Entrepreneur, HND in Business Management
            </p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post2.jpg" alt="Post 2" />
          </div>
          <div className="text">
            <p>Muku Kongor Neris, Lab Technician</p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post3.jpg" alt="post 3" />
          </div>
          <div className="text">
            <p>Muku Kongor Neris, Lab Technician</p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post4.jpg" alt="post 4" />
          </div>
          <div className="text">
            <p>Edith Sancho Nchang, Teacher</p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post5.jpg" alt="post 5" />
          </div>
          <div className="text">
            <p>
              Emma Judith, Masters Degree in Business Administration and Finance
            </p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post6.jpg" alt="post 6" />
          </div>
          <div className="text">
            <p>
              FAITH Nyaba, University Student majoring in English Private Law
              and Gender Base Violence
            </p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post7.jpg" alt="post 7" />
          </div>
          <div className="text">
            <p>Mme Stella Nyaba, Teacher with degree in Economics</p>
          </div>
        </div>
      </Flip>
      <Flip left>
        <div className="post">
          <div className="image">
            <img src="/images/organization/post8.jpg" alt="post 8" />
          </div>
          <div className="text">
            <p>Pastor Nyaba John, Degree in Biology</p>
          </div>
        </div>
      </Flip>
    </OrganContainer>
  );
}

export default Aboutus;

const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 2cm;
`;

let Content = styled.div`
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
    .subscribe {
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
    .vision-part {
      background-color: rgba(0, 0, 0, 0.1);
      margin: 0.5cm 1cm;
      border-radius: 20px;
      .vision-box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        padding: 0 1cm;
        margin-bottom: 1cm;
      }
      .vision-intro {
        text-align: justify;
        padding: 0px 2cm 5px 2cm;
        line-height: 1.4em;
        font-size: 25px;
        margin-bottom: 1cm;
      }
      .heading {
        font-family: times new roman;
        font-size: 30px;
        margin-bottom: 10px;
        text-align: center;
      }
      .vision-img {
        width: 100%;
        margin: 1cm 0 0.5cm 2cm;
        img {
          width: 82.5%;
          height: 100%;
        }
      }
    }
    .founder-biography {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 1cm 0cm 2cm 2cm;
      .founder-part1 {
        display: flex;
        align-items: center;
      }
      .founder-text,
      .continuation-text {
        width: 50%;
        font-size: 25px;
        text-align: justify;
        line-height: 0.9cm;
      }
      .continuation-text {
        width: 90%;
      }
      .founder-image {
        width: 40%;
        img {
          width: 95%;
          height: 100%;
        }
      }
    }
    .join-team {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 2cm;
      p {
        font-size: 30px;
        color: green;
        margin-bottom: 0.5cm;
      }
      button {
        background-color: rgb(111, 192, 111);
        padding: 0.25cm 0.5cm;
        font-size: 20px;
        border: 1px solid transparent;
        color: white;
        cursor: pointer;
        margin-bottom: 1cm;
        &:hover {
          border-color: black;
          color: black;
        }
      }
    }
  }
  aside {
    width: 30%;
  }
`;

const VisionContainer = styled.div`
  padding: 0.5cm;
  background-color: white;
  border-radius: 10px;
  justify-self: center;
  h1 {
    text-align: center;
    background-color: rgb(111, 192, 111);
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    color: white;
  }
  .icon-container {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .vision-text {
    p {
      font-size: 18px;
      padding: 0.1cm;
      text-align: center;
    }
  }
  &:hover {
    h1 {
      background-color: green;
    }
  }
`;

const OrganContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.4cm;
  padding: 0.25cm 1cm;
  .post {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    .image {
      img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    p {
      text-align: center;
      width: 85%;
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
