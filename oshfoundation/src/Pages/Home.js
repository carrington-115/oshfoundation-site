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
        <div className="content">Content here!</div>
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
  height: 100vh;
  .content,
  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: times new roman;
    border: 2px solid black;
    heigth: 100vh;
  }
  .content {
    width: 70%;
  }
  aside {
    width: 30%;
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
