import React from "react";
import styled from "styled-components";
function Home() {
  return (
    <Container>
      <VideoIntro>video</VideoIntro>
      <Content>
        <div className="content">Content here!</div>
        <aside>an aside</aside>
      </Content>
    </Container>
  );
}

export default Home;

let Container = styled.section`
  padding: 0 0.5cm;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
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
  .content{
    width: 70%;
  }
  aside{
    width: 30%;
  }
`;

let VideoIntro = styled.div``;
