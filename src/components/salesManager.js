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
    numForTextColumn = 2;
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
            <h3>
              Feel free to contact me whenever you have any questions or ready
              to move forward with us. Let’s change the future of mobility
              together!
            </h3>
          </Text>
          <span>
            <StyledLink>tel. 0 324 224 2411</StyledLink>
            <StyledLink style={{ color: '#23262C', cursor: 'pointer' }}>
              stanley.baker@example.com
            </StyledLink>
          </span>
        </TextColumn>
        <Img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
      </Grid>
    </div>
  );
};

const JobTitle = styled.p`
  color: rgba(0, 0, 0, 0.4);
  padding-top: ${props => props.theme.numForJobTitle};
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
`;
const Text = styled.div`
  color: #23262c;
  padding-bottom: ${props => props.theme.numForText};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
`;
const TextColumn = styled.div`
  grid-column: 1/9;
  align-self: end;
  margin-bottom: ${props => props.theme.numForTextColumn};
`;
const Img = styled.img`
  grid-column: 10/17;
`;
const StyledLink = styled.a`
  color: #23262c;
  paddingright: 40px;
  cursor: pointer;
  position: relative;
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
  &:first-child {
    margin-right: 40px;
  }
`;
const StyledH1 = styled.h1`
  color: #23262c;
  padding-bottom: 50px;
`;

export default SalesManager;
