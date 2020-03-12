import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Background, Container } from './layoutComponents';

var x;
var numForPaddingTop;
var numForPaddingBottom;
if (typeof window !== 'undefined') {
  if (window.innerWidth >= 1679) {
    x = 32;
    numForPaddingTop = 3;
    numForPaddingBottom = 2;
  } else if (window.innerWidth >= 1365) {
    x = 24;
    numForPaddingTop = 3;
    numForPaddingBottom = 2;
  } else if (window.innerWidth >= 1023) {
    x = 24;
    numForPaddingTop = 3;
    numForPaddingBottom = 2;
  } else if (window.innerWidth >= 767) {
    x = 32;
    numForPaddingTop = 2;
    numForPaddingBottom = 2;
  } else if (window.innerWidth >= 374) {
    x = 32;
    numForPaddingTop = 2;
    numForPaddingBottom = 2;
  }
}

const theme = {
  numForPaddingTop: `${x * numForPaddingTop}px`,
  numForPaddingBottom: `${x * numForPaddingBottom}px`
};
const Header = ({ className }) => {
  return (
    <div className={className}>
      <Background>
        <Container>
          <div
            style={{
              minHeight: '100vh',
              position: 'relative',
              zIndex: '3',
              display: 'grid',
              gridTemplateRows: '5% 15% 80%'
            }}
          >
            <Nav>
              <StyledLink to="/">Introduction</StyledLink>
              <StyledLink to="/">Opportunities</StyledLink>
              <StyledLink to="/">Contact us</StyledLink>
              <StyledEmail to="/">john@inbox.com</StyledEmail>
            </Nav>
            <Img
              theme={theme}
              src="https://images.ctfassets.net/r0lccig03c53/5QxGYnxwbe43emnf6OyYGW/f56327faa7ad7659d74bea5e6c7d71b8/Logo.svg?h=16"
            />

            <Grid theme={theme}>
              <FirstColumn>
                <StyledH1Name>Welcome, Alexander! </StyledH1Name>
                <StyledH1>
                  Please find below the detailed information about your
                  opportunity with Arrival. Feel free to contact us or schedule
                  a meeting.
                </StyledH1>
              </FirstColumn>
              <SecondColumn>
                <Name>Mike Ableson</Name>
                <Job>Your sales manager</Job>
              </SecondColumn>
              <ThirdColumn>
                <img
                  style={{ width: '64px', height: '80px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/5Isa1MTZDgUD8oV9rEftwV/69acfb3462b2b119ff5d0d0c5eab5ac6/team.png"
                />
              </ThirdColumn>
            </Grid>
          </div>
        </Container>
      </Background>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const StyledHeader = styled(Header)`
  color: var(--white);
  background: transparent;
`;

const StyledLink = styled(Link)`
  margin-right: 25px;
  position: relative;
  &:after {
    position: absolute;
    bottom: 20px;
    left: 0;
    content: '';
    background-color: transparent;
    width: 1px;
    height: 1px;
    transition: width 0.3s ease-in-out;
  }
  &:hover:after {
    background-color: var(--white);
    width: 100%;
  }
`;
const Job = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--grey);
`;
const Name = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
`;
const StyledEmail = styled(Link)`
  margin-left: auto;
  position: relative;
  &:after {
    position: absolute;
    bottom: 20px;
    left: 0;
    content: '';
    background-color: transparent;
    width: 1px;
    height: 1px;
    transition: width 0.3s ease-in-out;
  }
  &:hover:after {
    background-color: var(--white);
    width: 100%;
  }
`;
const Img = styled.img`
  padding-top: ${props => props.theme.numForPaddingTop};
`;
const Nav = styled.nav`
  display: flex;
  padding-top: 16px;
  font-family: Arrival Mono;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const Grid = styled.div`
  padding-bottom: ${props => props.theme.numForPaddingBottom};
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  @media (min-width: 1366px) {
    grid-template-columns: repeat(16, 1fr);
  }
`;

const FirstColumn = styled.div`
  grid-column: 1/7;
  align-self: end;
  @media (min-width: 1366px) {
    grid-column: 1/10;
  }
`;
const SecondColumn = styled.div`
  grid-column: 7/9;
  align-self: end;
  justify-self: end;
  text-align: right;
  @media (min-width: 1366px) {
    grid-column: 14/16;
    padding-right: 0;
  }
`;
const ThirdColumn = styled.div`
  grid-column: 9/10;
  align-self: end;
  justify-self: end;
  @media (min-width: 1366px) {
    grid-column: 16/17;
  }
`;
const StyledH1Name = styled.h1`
  color: var(--grey);
`;

const StyledH1 = styled.h1`
  color: var(--white);
`;

export default StyledHeader;
