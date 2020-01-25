import React from "react";
import styled from "styled-components";

export default function Header() {


  const FanPageHeader = styled.header`
  font-family: 'Poppins', sans-serif;
  color:#52331a;
  `
  const FanPageTitleH1 = styled.h1`
  color: #52331a`
 

  
  

  return (
    <FanPageHeader className="ui centered">
      <FanPageTitleH1 className="ui center">Rick &amp; Morty Fan Page</FanPageTitleH1>
    </FanPageHeader>
  );
}
