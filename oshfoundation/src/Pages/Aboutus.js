import React from "react";
import styled from "styled-components";

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
            <p>
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
              <ol>
                <li>
                  <h1>Decision Making</h1>
                  Through this empowerment, Oasis of hope will build the
                  understanding in the mind of a young girl to know that her
                  decisions matters in her own life. This empowerment will help
                  her tackle their challenges and create opportunities through
                  her personal decisions.
                </li>
                <li>
                  <h1>Believing in herself</h1>
                  We will build the confidence in her to have a sense of place
                  in the world and have aspirations and hope for the future.
                </li>
                <li>
                  <h1>Vision</h1>
                  We have the vision to emmpower young girls to bring people
                  together for something , teach them the necessary steps to
                  turn the idea into a real-world result, and play and active
                  role in the community.
                </li>
              </ol>
            </p>

            <div className="readmore-btn">
              <button>Read More</button>
            </div>
          </section>
        </div>
        <aside>Aside content here!</aside>
      </Content>
    </Container>
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
  .vision-part {
    .heading {
      font-family: times new roman;
      font-size: 30px;
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: justify;
      padding: 0px 2cm 5px 2cm;
      line-height: 1.4em;
      font-size: 25px;
      margin-bottom: 1cm;
    }
    ol{
      h1{
        font-size: 25px;
      }
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
  aside {
    width: 30%;
  }
`;
