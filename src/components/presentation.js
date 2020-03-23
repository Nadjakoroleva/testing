import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SlideForMobile from '../components/slideForMob';
import Slider from '../components/slider';

import { Container } from '../components/layoutComponents';

const ARROW_SVG =
  'https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8';

const DOWNLOAD_SVG =
  'https://images.ctfassets.net/r0lccig03c53/60KNcoS4SGIf3YVYitICin/027e75fb1f071c02576c813a00a88b6f/Download__Alt_.svg?h=16';

const SLIDE_SRC =
  'https://images.ctfassets.net/r0lccig03c53/UorbsmhA9QBUbabgwGaxM/a140c144d6fa147eb7e6aa4b5f103579/image_116.jpg?h=840';

const Display = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const DisplaySlideForMobile = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ComponentContainer = styled.div``;

const Line = styled.div`
  width: 100%;
  background-color: var(--grey);
  height: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const LineContainer = styled.div``;

const ContainerInner = styled.div`
  background-image: url(${SLIDE_SRC});
  background-size: cover;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-top: 232px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding-top: 632px;
  }
`;

const FirstSlide = styled.div`
  padding-left: 24px;
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(30, 31, 34, 0.7) 0%,
      rgba(30, 31, 34, 0) 43.23%,
      rgba(30, 31, 34, 0) 72.92%,
      rgba(30, 31, 34, 0.7) 100%
    );
  }
  @media (min-width: 1024px) {
    padding-left: 64px;
  }
`;

const Slide = styled.div`
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(30, 31, 34, 0.7) 0%,
      rgba(30, 31, 34, 0) 43.23%,
      rgba(30, 31, 34, 0) 72.92%,
      rgba(30, 31, 34, 0.7) 100%
    );
  }
`;

const Download = styled.a`
  color: var(--white);
  font-family: Arrival Mono;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

const Paragraph = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 64px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(9, 1fr);
    & div {
      grid-column: 1/10;
    }
  }
  @media (min-width: 1024px) {
    & div {
      grid-column: 1/8;
    }
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(16, 1fr);
    & div {
      grid-column: 1/10;
    }
  }
  @media (min-width: 1680px) {
    padding-bottom: 64px;
    & div {
      grid-column: 1/11;
    }
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: var(--white);
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 3;
`;

const Button = styled.button`
  font-family: Arrival Mono;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #23262c;
  padding: 24px 36px 24px 32px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  position: relative;
  z-index: 3;
  &:hover {
    background-color: #cecfd0;
  }
`;

const Presentation = () => {
  const size = useWindowSize().width;
  const slidesToShow = showSlides();
  function showSlides() {
    if (size > 1024) {
      return 2.1;
    } else {
      return 1.3;
    }
  }

  const ratio = settingXRatio();
  function settingXRatio() {
    if (size >= 1679) {
      return {
        x: 32,
        numForPadding: 2,
        paddingForContainer: 4
      };
    } else if (size >= 1365) {
      return {
        x: 24,
        numForPadding: 2,
        paddingForContainer: 4
      };
    } else if (size >= 1023) {
      return {
        x: 24,
        numForPadding: 2,
        paddingForContainer: 4
      };
    } else if (size >= 767) {
      return {
        x: 32,
        numForPadding: 2,
        paddingForContainer: 4
      };
    } else if (size >= 374) {
      return {
        x: 32,
        numForPadding: 2,
        paddingForContainer: 4
      };
    }
    return {
      x: 32,
      numForPadding: 3,
      paddingForContainer: 2
    };
  }
  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  const paddingTopForContainer = {
    paddingTop: `${ratio.x * ratio.numForPadding}px`
  };

  const paddingBottomForContainer = {
    paddingBottom: `${ratio.x * ratio.paddingForContainer}px`
  };

  return (
    <ComponentContainer style={paddingBottomForContainer}>
      <Container>
        <LineContainer style={paddingTopForContainer}>
          <Line />
        </LineContainer>
        <Paragraph>
          <div>
            <h4>
              <span style={{ color: 'var(--grey)' }}>Presentations.</span>{' '}
              <span>
                We’ve crafted a unique opportunity that fits for the needs of
                your business and your company structure.
              </span>
            </h4>
          </div>
        </Paragraph>
        <DisplaySlideForMobile>
          <SlideForMobile />
          <SlideForMobile />
        </DisplaySlideForMobile>
      </Container>

      <Display>
        <Slider slidesToShow={slidesToShow}>
          <FirstSlide>
            <ContainerInner>
              <Text>UPS & Arrival opportunity</Text>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between'
                }}
              >
                <Button>
                  <span style={{ paddingRight: '30px' }}>
                    View presentation
                  </span>{' '}
                  <img
                    style={{ position: 'relative', top: '-1px' }}
                    src={ARROW_SVG}
                  ></img>
                </Button>
                <Download>
                  Download{' '}
                  <img style={{ paddingLeft: '17px' }} src={DOWNLOAD_SVG}></img>
                </Download>
              </div>
            </ContainerInner>
          </FirstSlide>
          <Slide>
            <ContainerInner>
              <Text>UPS & Arrival opportunity</Text>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between'
                }}
              >
                <Button>
                  <span style={{ paddingRight: '30px' }}>
                    View presentation
                  </span>{' '}
                  <img
                    style={{ position: 'relative', top: '-1px' }}
                    src={ARROW_SVG}
                  ></img>
                </Button>
                <Download>
                  Download{' '}
                  <img style={{ paddingLeft: '17px' }} src={DOWNLOAD_SVG}></img>
                </Download>
              </div>
            </ContainerInner>
          </Slide>
          <Slide>
            <ContainerInner>
              <Text>UPS & Arrival opportunity</Text>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between'
                }}
              >
                <Button>
                  <span style={{ paddingRight: '30px' }}>
                    View presentation
                  </span>{' '}
                  <img
                    style={{ position: 'relative', top: '-1px' }}
                    src={ARROW_SVG}
                  ></img>
                </Button>
                <Download>
                  Download{' '}
                  <img style={{ paddingLeft: '17px' }} src={DOWNLOAD_SVG}></img>
                </Download>
              </div>
            </ContainerInner>
          </Slide>
        </Slider>
      </Display>
    </ComponentContainer>
  );
};

export default Presentation;
