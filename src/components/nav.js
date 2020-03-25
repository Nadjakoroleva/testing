import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

import styles from './styles.css';

const BURGER_ICON =
  'https://images.ctfassets.net/r0lccig03c53/RqyEMwZchfUdzG8gNLqvY/9ed4050336c1c4de7b2a8fdac926264c/Menu.svg?h=16';

const LOGO =
  'https://images.ctfassets.net/r0lccig03c53/5QxGYnxwbe43emnf6OyYGW/f56327faa7ad7659d74bea5e6c7d71b8/Logo.svg?h=16';

const ASTERIX =
  'https://images.ctfassets.net/r0lccig03c53/2OSxVKQISjKTie8AKOCzPN/a948f1de125c3cc835ed2886836321e7/asterix.svg?h=20';

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledEmail = styled(Link)`
  margin-left: auto;
  position: relative;
  display: none;
  &:after {
    position: absolute;
    top: 15px;
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
  @media (min-width: 1024px) {
    display: block;
  }
`;

const AnimatedNavContainer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  background-color: var(--lightBlack);
  color: var(--white);
  top: 0;
  left: 0;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  opacity: 0;
  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1024px) {
    padding-left: 48px;
    padding-right: 48px;
  }
  @media (min-width: 1024px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const Menu = styled.a`
  display: block;
  width: 100%;
  text-align: right;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-right: 25px;
    position: relative;
    &:after {
      position: absolute;
      top: 15px;
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

const Img = styled.img`
  animation-name: ${opacity};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  transform-origin: center center;
  height: 20px;
  @media (min-width: 1024px) {
    margin-right: 60px;
  }
`;

const Nav = styled.nav`
  animation-name: ${opacity};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 52px;
  padding-bottom: 48px;
  font-family: Arrival Mono;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const AnimatedNav = styled(Nav)`
  padding-top: 16px;
  padding-bottom: 0px;
`;

const Navigation = ({ animation }) => {
  const [isShowing, setShowing] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setShowing(window.scrollY > 32);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div
        style={{
          position: 'relative',
          zIndex: '10',
          backgroundColor: 'transparent'
        }}
      >
        <Nav className={isShowing ? 'dissapearingNav' : 'opacity'}>
          <Img src={LOGO} />
          <Menu>
            Menu{' '}
            <img
              src={BURGER_ICON}
              style={{ position: 'relative', top: '4px', paddingLeft: '12px' }}
            />
          </Menu>

          <StyledLink to="/">Introduction</StyledLink>
          <StyledLink to="/">Opportunities</StyledLink>
          <StyledLink to="/">Contact us</StyledLink>
          <StyledEmail to="/">john@inbox.com</StyledEmail>
        </Nav>
      </div>
      <AnimatedNavContainer
        className={isShowing ? 'opacity' : 'dissapearingNav'}
      >
        <AnimatedNav>
          <Img className={isShowing ? 'rotation' : ''} src={ASTERIX} />

          <StyledLink className={isShowing ? 'transformX' : ''} to="/">
            Introduction
          </StyledLink>
          <StyledLink className={isShowing ? 'transformX' : ''} to="/">
            Opportunities
          </StyledLink>
          <StyledLink className={isShowing ? 'transformX' : ''} to="/">
            Contact us
          </StyledLink>

          <StyledEmail to="/">john@inbox.com</StyledEmail>
        </AnimatedNav>
      </AnimatedNavContainer>
    </>
  );
};
export default Navigation;
