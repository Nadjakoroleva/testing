import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <Grid>
        <Copyright>©2020 Arrival Ltd. All rights reserved.</Copyright>
        <span>
          <Link href="">Privacy policy</Link>
          <Link href="">info@ARRIVAL.COM</Link>
          <Link>/</Link>
          <Link href="">Twitter</Link>
          <Link href="">Facebook</Link>
          <Link href="">Linkedin</Link>
          <Link href="">Instagram</Link>
        </span>
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
  @media (min-width: 1366px) {
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Copyright = styled.a`
  padding-top: 56px;
  @media (min-width: 1366px) {
    padding-top: 0;
  }
`;

const Link = styled.a`
  color: var(--white);
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
`;
const StyledFooter = styled(Footer)`
  background-color: #0f1011;
`;

export default StyledFooter;
