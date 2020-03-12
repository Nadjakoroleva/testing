import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/layoutComponents';

import Slider from '../components/slider';

var x;
var numForPadding;
var paddingForContainer;
if (typeof window !== 'undefined') {
  if (window.innerWidth >= 1679) {
    x = 32;
    numForPadding = 2;
    paddingForContainer = 4;
  } else if (window.innerWidth >= 1365) {
    x = 24;
    numForPadding = 2;
    paddingForContainer = 4;
  } else if (window.innerWidth >= 1023) {
    x = 24;
    numForPadding = 2;
    paddingForContainer = 4;
  } else if (window.innerWidth >= 374) {
    x = 32;
    numForPadding = 2;
    paddingForContainer = 4;
  }
}

const theme = {
  numForPadding: `${x * numForPadding}px`,
  paddingForContainer: `${x * paddingForContainer}px`
};

const Presentation = () => {
  // считаем сколько слайдов показывать
  const size = useWindowSize().width;
  const slidesToShow = showSlides();
  function showSlides() {
    if (size > 1024) {
      return 2.1;
    } else {
      return 1.5;
    }
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
  return (
    <ComponentContainer theme={theme}>
      <Container>
        <LineContainer theme={theme}>
          <Line />
        </LineContainer>
        <Paragraph theme={theme}>
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
      </Container>
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
                <span style={{ paddingRight: '30px' }}>View presentation</span>{' '}
                <img
                  style={{ position: 'relative', top: '-1px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"
                ></img>
              </Button>
              <Download>
                Download{' '}
                <img
                  style={{ paddingLeft: '17px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/60KNcoS4SGIf3YVYitICin/027e75fb1f071c02576c813a00a88b6f/Download__Alt_.svg?h=16"
                ></img>
              </Download>
            </div>
          </ContainerInner>
        </FirstSlide>
        <div>
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
                <span style={{ paddingRight: '30px' }}>View presentation</span>{' '}
                <img
                  style={{ position: 'relative', top: '-1px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"
                ></img>
              </Button>
              <Download>
                Download{' '}
                <img
                  style={{ paddingLeft: '17px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/60KNcoS4SGIf3YVYitICin/027e75fb1f071c02576c813a00a88b6f/Download__Alt_.svg?h=16"
                ></img>
              </Download>
            </div>
          </ContainerInner>
        </div>
        <div>
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
                <span style={{ paddingRight: '30px' }}>View presentation</span>{' '}
                <img
                  style={{ position: 'relative', top: '-1px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"
                ></img>
              </Button>
              <Download>
                Download{' '}
                <img
                  style={{ paddingLeft: '17px' }}
                  src="https://images.ctfassets.net/r0lccig03c53/60KNcoS4SGIf3YVYitICin/027e75fb1f071c02576c813a00a88b6f/Download__Alt_.svg?h=16"
                ></img>
              </Download>
            </div>
          </ContainerInner>
        </div>
      </Slider>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  padding-bottom: ${props => props.theme.paddingForContainer};
`;

const Line = styled.div`
  width: 100%;
  background-color: var(--grey);
  height: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const LineContainer = styled.div`
  padding-top: ${props => props.theme.numForPadding};
`;

const ContainerInner = styled.div`
  background-image: url(https://images.ctfassets.net/r0lccig03c53/UorbsmhA9QBUbabgwGaxM/a140c144d6fa147eb7e6aa4b5f103579/image_116.jpg?h=840);
  background-size: cover;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-top: 632px;
  cursor: pointer;
`;

const FirstSlide = styled.div`
  padding-left: 64px;
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
`;

const Paragraph = styled.div`
  padding-bottom: ${props => props.theme.numForPadding};
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  & div {
    grid-column: 1/8;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(16, 1fr);
    & div {
      grid-column: 1/10;
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
  &:hover {
    background-color: #cecfd0;
  }
`;

export default Presentation;
