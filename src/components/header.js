/* global window */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';

import Navigation from './nav';

import { Background, Container } from './layoutComponents';

const PARALLAX_IMAGE_SRC =
  'https://images.ctfassets.net/r0lccig03c53/2mfUI7BGFGn3PUoAOf5lWG/0e127789350e719f4ebb97230b0bcd4f/image.jpg';

const PHOTO_SRC =
  'https://images.ctfassets.net/r0lccig03c53/5Isa1MTZDgUD8oV9rEftwV/69acfb3462b2b119ff5d0d0c5eab5ac6/team.png';

const InnerConatiner = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-rows: 35 65%;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 6fr 90px;

  @media (min-width: 414px) {
    grid-template-rows: 5fr 80px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 8fr 1fr;
  }
  @media (min-width: 779px) {
    grid-template-rows: 4fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
  }
  @media (min-width: 1366px) {
    grid-template-columns: repeat(16, 1fr);
  }
`;

const FirstColumn = styled.div`
  grid-column: 1/3;
  align-self: end;
  padding-bottom: 24px;
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
    padding-right: 15px;
  }
`;

const ThirdColumn = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  align-self: end;
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

const StyledH3Name = styled.h3`
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

const StyledH3 = styled(StyledH3Name)`
  color: var(--white);
`;

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
    }
    return {
      x: 32,
      numForPaddingTop: 3,
      numForPaddingBottom: 2
    };
  }

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

  const gridPadding = {
    paddingBottom: `${ratio.x * ratio.numForPaddingBottom}px`
  };

  return (
    <div className={className}>
      <Background>
        <Parallax
          className={'parallax'}
          bgImage={PARALLAX_IMAGE_SRC}
          strength={500}
        >
          <Container>
            <InnerConatiner>
              <Navigation />

              <Grid style={gridPadding}>
                <FirstColumn>
                  <StyledH3Name>Welcome, Alexander!</StyledH3Name>
                  <StyledH3>
                    Please find below the detailed information about your
                    opportunity with Arrival. Feel free to contact us or
                    schedule a meeting.
                  </StyledH3>
                </FirstColumn>
                <SecondColumn>
                  <Name>Mike Ableson</Name>
                  <Job>Your sales manager</Job>
                </SecondColumn>
                <ThirdColumn>
                  <img
                    style={{ width: '64px', height: '80px' }}
                    src={PHOTO_SRC}
                  />
                </ThirdColumn>
              </Grid>
            </InnerConatiner>
          </Container>
        </Parallax>
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

export default Header;
