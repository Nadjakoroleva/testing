import styled, { keyframes } from 'styled-components';

export const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Background = styled.div`
  animation-name: ${opacity};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
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
  @media (min-height: 1px) and (max-height: 680px) {
    height: 100%;
  }
  @media (min-width: 768px) {
    background-postion: 100% 100%;
  }
`;
export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 100%;
  @media (min-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (min-width: 1024px) {
    margin-left: 48px;
    margin-right: 48px;
  }
  @media (min-width: 1024px) {
    margin-left: 64px;
    margin-right: 64px;
  }
`;
