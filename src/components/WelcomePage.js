import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  const WelcomeSection = styled.section`
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: #52331a;
    font-size: 1.8rem;
  `;

  const WelcomeHeader = styled.header``;

  const PhotoImg = styled.img`
    display: flex;
    align-self: center;
    border-radius: 50%;
    margin: 10% auto;
  `;

  return (
    <WelcomeSection className="welcome-page">
      <WelcomeHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <PhotoImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </WelcomeHeader>
    </WelcomeSection>
  );
}
