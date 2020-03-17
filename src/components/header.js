import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';

import { Background, Container } from './layoutComponents';

const Header = ({ className }) => {
  const size = useWindowSize().width;
  const ratio = settingXRatio();

  function settingXRatio() {
    if (size >= 1679) {
      return {
        x: 32,
        numForPaddingTop: 3,
        numForPaddingBottom: 2
      };
    } else if (size >= 1365) {
      return {
        x: 24,
        numForPaddingTop: 3,
        numForPaddingBottom: 2
      };
    } else if (size >= 1023) {
      return {
        x: 24,
        numForPaddingTop: 3,
        numForPaddingBottom: 2
      };
    } else if (size >= 767) {
      return {
        x: 32,
        numForPaddingTop: 2,
        numForPaddingBottom: 2
      };
    } else if (size >= 374) {
      return {
        x: 32,
        numForPaddingTop: 3,
        numForPaddingBottom: 2
      };
    } else if (size < 374) {
      return {
        x: 32,
        numForPaddingTop: 3,
        numForPaddingBottom: 2
      };
    }
  }

  // var theme = {
  //   numForPaddingTop: `${ratio.x * ratio.numForPaddingTop}px`,
  //   numForPaddingBottom: `${ratio.x * ratio.numForPaddingBottom}px`,
  //   x: `${ratio.x}px`
  // };

  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize());

    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

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
              <Menu>Menu</Menu>
              <StyledLink to="/">Introduction</StyledLink>
              <StyledLink to="/">Opportunities</StyledLink>
              <StyledLink to="/">Contact us</StyledLink>
              <StyledEmail to="/">john@inbox.com</StyledEmail>
            </Nav>
            <Img src="https://images.ctfassets.net/r0lccig03c53/5QxGYnxwbe43emnf6OyYGW/f56327faa7ad7659d74bea5e6c7d71b8/Logo.svg?h=16" />

            <Grid>
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

const Menu = styled.a`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-right: 25px;
    position: relative;
    &:after {
      position: absolute;
      bottom: 10px;
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
    bottom: 10px;
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
  padding-top: 64px;
  @media (min-width: 768px) {
    padding-top: 72px;
  }
  @media (min-width: 1680px) {
    padding-top: 96px;
  }
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
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 6fr 1fr;
  padding-bottom: 64px;
  @media (min-width: 414px) {
    grid-template-rows: 5fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 8fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    padding-bottom: 48px;
  }
  @media (min-width: 1366px) {
    grid-template-columns: repeat(16, 1fr);
  }
  @media (min-width: 1680px) {
    padding-bottom: 64px;
  }
`;

const FirstColumn = styled.div`
  grid-column: 1/3;
  align-self: end;
  padding-bottom: 32px;
  @media (min-width: 768px) {
    grid-column: 1/10;
  }
  @media (min-width: 1024px) {
    grid-column: 1/7;
    align-self: end;
    padding-bottom: 0;
  }
  @media (min-width: 1366px) {
    grid-column: 1/10;
  }
  @media (min-width: 1680px) {
    grid-column: 1/10;
  }
`;

const SecondColumn = styled.div`
  grid-column: 2/3;
  text-align: left;
  align-self: end;
  @media (min-width: 768px) {
    grid-column: 2/5;
  }
  @media (min-width: 1024px) {
    grid-column: 7/9;
    align-self: end;
    justify-self: end;
    text-align: right;
  }
  @media (min-width: 1366px) {
    grid-column: 14/16;
    padding-right: 0;
  }
`;
const ThirdColumn = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  @media (min-width: 1024px) {
    grid-column: 9/10;
    align-self: end;
    justify-self: end;
    grid-row: 1;
  }
  @media (min-width: 1366px) {
    grid-column: 16/17;
  }
`;
const StyledH1Name = styled.h3`
  color: var(--grey);
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (min-width: 1680px) {
    font-size: 44px;
    line-height: 56px;
  }
`;

const StyledH1 = styled.h3`
  color: var(--white);
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (min-width: 1680px) {
    font-size: 44px;
    line-height: 56px;
  }
`;

export default StyledHeader;
