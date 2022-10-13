import React from "react";
import styled from "styled-components";

function Aboutus() {
  return (
    <Container>
      <Content>
        <div className="content">
          <h1 className="vision">Our Vision</h1>
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  font-size: 10px;
  font-family: times new roman;
  .content,
  aside {
    display: flex;
    flex-direction: column;
    heigth: 100vh;
  }
  .content {
    width: 70%;
    padding: 0 10px;
    .vision{
      margin-top: 1cm;
      font-family: 
      text-align: center;

    }
  }
  aside {
    width: 30%;
  }
`;
