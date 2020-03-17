import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SlideForMob = () => {
  return (
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
            View <Display>presentation</Display>
          </span>{' '}
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
  );
};

const Display = styled.div`
  display: none;
  @media (min-width: 480px) {
    display: block;
  }
`;

const ContainerInner = styled.div`
  background-image: url(https://images.ctfassets.net/r0lccig03c53/UorbsmhA9QBUbabgwGaxM/a140c144d6fa147eb7e6aa4b5f103579/image_116.jpg?h=840);
  background-size: cover;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-top: 128px;
  cursor: pointer;
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
  @media (min-width: 480px) {
    padding-top: 232px;
  }
  @media (min-width: 768px) {
    padding-top: 632px;
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
  padding: 24px 32px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #f3f3f3;
  border: none;
  transition: background-color 0.3s ease-in-out;
  position: relative;
  z-index: 3;
  &:hover {
    background-color: #cecfd0;
  }
`;

export default SlideForMob;
