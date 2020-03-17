import React, { useEffect } from 'react';
import styled from 'styled-components';

var x;
var numForJobTitle;
var numForText;
var numForTextColumn;
if (typeof window !== 'undefined') {
  if (window.innerWidth >= 1679) {
    x = 32;
    numForJobTitle = 2;
    numForText = 2;
    numForTextColumn = 2.5;
  } else if (window.innerWidth >= 1365) {
    x = 24;
    numForJobTitle = 3;
    numForText = 2;
    numForTextColumn = 3;
  } else if (window.innerWidth >= 1023) {
    x = 24;
    numForJobTitle = 3;
    numForText = 2;
    numForTextColumn = 3;
  } else if (window.innerWidth >= 374) {
    x = 32;
    numForJobTitle = 2;
    numForText = 1;
    numForTextColumn = 1;
  }
}

const theme = {
  numForJobTitle: `${x * numForJobTitle}px`,
  numForText: `${x * numForText}px`,
  numForTextColumn: `${x * numForTextColumn}px`
};

const SalesManager = () => {
  return (
    <div>
      <JobTitle theme={theme}>Your sales manager</JobTitle>
      <StyledH1>Mike Ableson</StyledH1>
      <Grid>
        <TextColumn theme={theme}>
          <Text theme={theme}>
            Feel free to contact me whenever you have any questions or ready to
            move forward with us. Let’s change the future of mobility together!
          </Text>
          <LinkContainer>
            <StyledLink>tel. 0 324 224 2411</StyledLink>
            <StyledLink>stanley.baker@example.com</StyledLink>
          </LinkContainer>
        </TextColumn>
        <Img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
      </Grid>
    </div>
  );
};

const JobTitle = styled.p`
  color: rgba(0, 0, 0, 0.4);
  padding-top: 64px;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
  @media (min-width: 1024px) {
    padding-top: 72px;
  }
  @media (min-width: 1680px) {
    padding-top: 64px;
  }
`;
const Text = styled.h4`
  color: #23262c;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 480px) {
    grid-template-rows: 1fr 1.5fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(16, 1fr);
  }
`;
const TextColumn = styled.div`
  grid-column: 1/5;
  align-self: end;
  padding-bottom: 32px;
  @media (min-width: 768px) {
    padding-bottom: 64px;
  }
  @media (min-width: 1024px) {
    grid-column: 1/9;
    align-self: end;
    padding-bottom: 72px;
  }
  @media (min-width: 1680px) {
    padding-bottom: 80px;
  }
`;
const Img = styled.img`
  grid-column: 1/3;
  grid-row: 2/3;
  padding-top: 30px;
  @media (min-width: 768px) {
    grid-column: 6/8;
    max-width: 285px;
    grid-row: 1/3;
    padding-top: 0;
  }
  @media (min-width: 1024px) {
    grid-column: 10/17;
    max-width: 100%;
  }
`;
const LinkContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;
const StyledLink = styled.a`
  color: #23262c;
  padding-right: 40px;
  cursor: pointer;
  position: relative;
  display: block;
  padding-top: 32px;
  &:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: '';
    background-color: transparent;
    width: 1px;
    height: 1px;
    transition: width 0.3s ease-in-out;
  }
  &:hover:after {
    background-color: #23262c;
    width: 100%;
  }
  @media (min-width: 1024px) {
    padding-top: 48px;
  }
  @media (min-width: 1680px) {
    padding-top: 64px;
  }
`;
const StyledH1 = styled.h1`
  padding-bottom: 0;
  color: #23262c;
  @media (min-width: 1024px) {
    padding-bottom: 50px;
  }
`;

export default SalesManager;
