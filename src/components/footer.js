import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <Grid>
        <LinksContainer>
          <Link href="">Privacy policy</Link>
          <Link href="">info@ARRIVAL.COM</Link>
          <Display>
            <Link>/</Link>
          </Display>
          <Link href="">Twitter</Link>
          <Link href="">Facebook</Link>
          <Link href="">Linkedin</Link>
          <Link href="">Instagram</Link>
        </LinksContainer>
        <Copyright>©2020 Arrival Ltd. All rights reserved.</Copyright>
      </Grid>
    </Container>
  </footer>
);

const Grid = styled.div`
  padding-top: 28px;
  padding-bottom: 48px;
  color: var(--grey);
  @media (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 1366px) {
    padding-bottom: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Display = styled.span`
  display: none;
  @media (min-width: 1024px) {
    display: inline;
  }
`;
const LinksContainer = styled.div`
  padding-bottom: 104px;
  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    padding-bottom: 144px;
    & a:first-of-type {
      padding-right: 32px;
    }
    a:not(:last-child) {
      padding-right: 32px;
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    padding-bottom: 56px;
  }
  @media (min-width: 1366px) {
    width: auto;
  }
`;

const Copyright = styled.a`
  @media (min-width: 1024px) {
    padding-top: 56px;
  }
  @media (min-width: 1280px) {
    padding-top: 0;
  }
  @media (min-width: 1280px) {
    width: auto;
  }
`;

const Link = styled.a`
  color: var(--white);
  display: block;
  padding-top: 20px;
  @media (min-width: 768px) {
    position: relative;
    padding-top: 16px;

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
      background-color: var(--white);
      width: 100%;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  @media (min-width: 1366px) {
    padding-top: 0;
  }
`;
const StyledFooter = styled(Footer)`
  background-color: #0f1011;
`;

export default StyledFooter;
