/* global window */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Slider from '../components/slider';

import { Container } from '../components/layoutComponents';

const DOWNLOAD_SVG =
  'https://images.ctfassets.net/r0lccig03c53/1hgReEnU8us6XvgxvzPLyV/64d0c95a71bc456b4c1d90c2bf6a8cc2/Arrow_Fw.svg?h=16';

const SLIDE_SRC =
  'https://images.ctfassets.net/r0lccig03c53/UorbsmhA9QBUbabgwGaxM/a140c144d6fa147eb7e6aa4b5f103579/image_116.jpg?h=840';

const ComponentContainer = styled.div``;

const ContainerInner = styled.div`
  background-image: url(${SLIDE_SRC});
  background-size: cover;
  padding: 385px 32px 32px 32px;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 590px 64px 64px 64px;
  }
  @media (min-width: 1680px) {
    padding: 670px 64px 64px 64px;
  }
`;

const Slide = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:hover::before {
    opacity: 0.3;
    visibility: visible;
  }
  &::before {
    transition: opacity 0.3s ease-in;
    content: '';
    position: absolute;
    opacity: 0;
    visibility: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: black;
  }
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

const FirstSlide = styled(Slide)`
  margin-left: 24px;
  @media (min-width: 1024px) {
    margin-left: 64px;
  }
`;

const Paragraph = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 32px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(9, 1fr);
    & div {
      grid-column: 1/10;
    }
  }
  @media (min-width: 1024px) {
    padding-bottom: 48px;
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
  position: relative;
  z-index: 3;
  @media (min-width: 1024px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Download = styled.a`
  display: flex;
  color: var(--white);
  font-family: Arrival Mono;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

const Img = styled.img`
  padding-left: 12px;
  position: relative;
  top: -1px;
`;

const Presentation = () => {
  const size = useWindowSize().width;
  const slidesToShow = showSlides();
  function showSlides() {
    if (size > 1365) {
      return 2.2;
    }
    if (size > 1023) {
      return 1.5;
    }
    if (size > 767) {
      return 1.3;
    }
    return 1.07;
  }

  const ratio = settingXRatio();
  function settingXRatio() {
    if (size >= 1679) {
      return {
        x: 32,
        numForPadding: 2,
        paddingForContainer: 3
      };
    } else if (size >= 1365) {
      return {
        x: 24,
        numForPadding: 2,
        paddingForContainer: 3
      };
    } else if (size >= 1023) {
      return {
        x: 24,
        numForPadding: 3,
        paddingForContainer: 3
      };
    } else if (size >= 767) {
      return {
        x: 32,
        numForPadding: 2,
        paddingForContainer: 2
      };
    } else if (size >= 374) {
      return {
        x: 32,
        numForPadding: 2,
        paddingForContainer: 2
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

  // анимация по скроллу

  const [scrollY, setScrollY] = useState(0);
  const element = document.getElementById('element');

  // получаем текущую позицию скролла
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResizeForTopPosition = () => {
      console.log(element.offsetTop);
    };

    window.addEventListener('resize', handleResizeForTopPosition);
    return () =>
      window.removeEventListener('resize', handleResizeForTopPosition);
  }, []);

  return (
    <ComponentContainer id={'element'} style={paddingBottomForContainer}>
      <Container>
        <Paragraph style={paddingTopForContainer}>
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
            <Download>
              View presentation <Img src={DOWNLOAD_SVG} />
            </Download>
          </ContainerInner>
        </FirstSlide>
        <Slide>
          <ContainerInner>
            <Text>UPS & Arrival opportunity</Text>
            <Download>
              View presentation <Img src={DOWNLOAD_SVG} />
            </Download>
          </ContainerInner>
        </Slide>
        <Slide>
          <ContainerInner>
            <Text>UPS & Arrival opportunity</Text>
            <Download>
              View presentation <Img src={DOWNLOAD_SVG} />
            </Download>
          </ContainerInner>
        </Slide>
      </Slider>
    </ComponentContainer>
  );
};

export default Presentation;
