import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <Grid>
        <Copyright>©2020 Arrival Ltd. All rights reserved.</Copyright>
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
      </Grid>
    </Container>
  </footer>
);

const Grid = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  color: var(--grey);
  display: flex;
  flex-direction: column-reverse;
  align-items: baseline;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Display = styled.a`
  display: none;
  @media (min-width: 1024px) {
    display: inline;
    margin-right: 32px;
  }
`;
const LinksContainer = styled.span`
  display: block;
  width: 40%;
  @media (min-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    width: 61%;
  }
  @media (min-width: 1366px) {
    width: 56%;
  }
  @media (min-width: 1680px) {
    width: 45%;
  }
`;

const Copyright = styled.a`
  padding-top: 104px;
  @media (min-width: 768px) {
    padding-top: 144px;
  }
  @media (min-width: 1024px) {
    padding-top: 56px;
  }
  @media (min-width: 1280px) {
    padding-top: 0;
  }
`;

const Link = styled.a`
  color: var(--white);
  display: block;
  padding-top: 20px;
  @media (min-width: 768px) {
    padding-top: 0;
    display: inline;
    margin-right: 32px;
    position: relative;
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
`;
const StyledFooter = styled(Footer)`
  background-color: #0f1011;
`;

export default StyledFooter;
