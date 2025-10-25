import React from "react";
import styled from "styled-components";

export default function Header() {
  const FanPageHeader = styled.header`
    font-family: "Poppins", sans-serif;
    color: #52331a;
  `;
  const FanPageTitleH1 = styled.h1`
    color: #52331a;
    display: flex;
    justify-content:center;
    align-self: center;
    margin: 0 auto;
    text-align: center;
    flex:1;

  `;

  return (
    <div className="ui centered">
      <FanPageHeader>
        <FanPageTitleH1>Rick &amp; Morty Fan Page</FanPageTitleH1>
      </FanPageHeader>
    </div>
  );
}
