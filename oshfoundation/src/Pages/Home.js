import React from "react";
import styled from "styled-components";
function Home() {
  return (
    <Container>
      <HeaderIntro>
        <div className="video-container">
          <video controls autoplay width="100%">
            <source src="/videos/oshvideo.mp4" />
          </video>
        </div>
        <div className="join-form">
          <h1>
            If have not yet joined our Community?
            <br /> Join Now
          </h1>
          <input className="name" type="text" placeholder="Name" />
          <input className="email" type="email" placeholder="Email" />
          <button>Join Now</button>
        </div>
      </HeaderIntro>
      <Content>
        <div className="content">
          <section className="vision-part">
            <h1 className="heading">OUR VISION</h1>
            <p>
              &nbsp; &nbsp; Oasis of Hope Association (OHA) has a mission "until
              no girl is hopeless". We have a centered vission to empower the
              girl child, combat gender-based violence, protection of the girl
              child from every form of violence. We have a mission to help young
              girls articulate their thoughts and we help them in decision
              making. We are out to ensure that the young girl has their own
              voice, their opinion, and ensure that their voice be heard.
            </p>
            <div className="vision-img">
              <img src="/images/vision1.jpg" alt="vision1 image" />
            </div>
            <div className="readmore-btn">
              <button>Read More</button>
            </div>
          </section>
          <section className="founder">
            <div className="founder-img">
              <img src="/images/founder.jpg" alt="founder-photo" />
            </div>
            <div className="founder-text">
              <h1>
                Mrs. Mokom Mbahtiful Tracy
                <br /> The Founder of OHA <hr />
                <br />
              </h1>
              <p>
                &nbsp;&nbsp; "Generally, my vision is to mentor young girls,
                between 15-35 years, to act in a way that can have a positive
                influence in their lives, family, and commmunity through
                reproduction health, entrepreneurship, counselling, orientation,
                and motivation."
              </p>
              <button>Learn More</button>
            </div>
          </section>
          <section className="district">
            <div className="bde">
              <div className="bde-img">
                <img src="/images/oshbde.jpg" alt="Oasis of Hope Bamenda" />
              </div>
              <p>Oasis of Hope Bamenda</p>
              <button>Read our Blog</button>
            </div>
            <div className="yde">
              <div className="yde-img">
                <img src="/images/oshyde.jpg" alt="Oasis of Hope Yaounde" />
              </div>
              <p>Oasis of Hope Bamenda</p>
              <button>Read our Blog</button>
            </div>
            <div className="yde"></div>
          </section>
        </div>
        <aside>an aside</aside>
      </Content>
    </Container>
  );
}

export default Home;

let Container = styled.section`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

let Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  margin-top: 1cm;
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
    .vision-part {
      .heading {
        font-family: times new roman;
        font-size: 18px;
        margin-bottom: 10px;
        text-align: center;
      }
      p {
        text-align: justify;
        padding: 0px 1cm 5px 1cm;
        line-height: 1.4em;
      }
      .vision-img {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 0.5cm;
        img {
          width: 80%;
          height: 100%;
        }
      }
      .readmore-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        button {
          width: 3cm;
          height: 2em;
          border-color: transparent;
          color: white;
          background-color: rgb(4, 143, 16);
          cursor: pointer;
          border-radius: 2px;
          border: 1.5px solid black;
          margin-bottom: 20px;
          &:hover {
            color: black;
            background-color: white;
          }
        }
      }
    }
    .founder {
      display: flex;
      align-items: center;
      width: 80%;
      justify-content: center;
      padding: 5px 1cm;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      margin-bottom: 1cm;
      .founder-img {
        width: 4.5cm;
        margin-right: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .founder-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        p {
          font-style: italic;
          text-align: center;
          font-size: 15px;
        }
        h1 {
          font-size: 15px;
          text-align: center;
        }
        button {
          width: 3cm;
          height: 2em;
          border-color: transparent;
          color: white;
          background-color: rgb(4, 143, 16);
          cursor: pointer;
          border-radius: 2px;
          border: 1.5px solid black;
          margin: 10px 0px;
          &:hover {
            color: black;
            background-color: white;
          }
        }
      }
    }
  }
  aside {
    width: 35%;
  }
`;

let HeaderIntro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5cm 0 1cm 0;
  background-color: rgba(0, 0, 0, 0.1);
  .video-container {
    width: 60%;
    margin-left: 1cm;
    video {
      border-radius: 10px;
    }
  }
  .join-form {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      width: 70%;
      font-size: 20px;
      font-family: cambria;
      text-align: center;
      margin-bottom: 10px;
      color: rgb(4, 143, 16);
    }
    input {
      width: 5.5cm;
      margin-bottom: 10px;
      height: 25px;
      padding-left: 1em;
      background-color: rgba(4, 143, 16, 0.1);
      border: 1px solid black;
      border-radius: 3px;
    }
    button {
      width: 3cm;
      height: 2em;
      border-color: transparent;
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
