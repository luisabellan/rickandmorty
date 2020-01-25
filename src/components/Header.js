import React from "react";
import styled from "styled-components";

export default function Header() {


  const FanPageHeader = styled.header`
  font-family: 'Poppins', sans-serif;
  color:#52331a;
  

  `;
  const FanPageTitleH1 = styled.h1`
    color: #52331a;
    display:flex;
    align-self: center;
    margin: 0 35%;

  `;
 

  
  

  return (
    <div className="ui centered">
    <FanPageHeader className="">
      <FanPageTitleH1 className="">Rick &amp; Morty Fan Page</FanPageTitleH1>
    </FanPageHeader>
    </div>
  );
}
