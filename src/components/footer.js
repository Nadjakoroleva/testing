import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <div
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          color: 'var(--grey)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between'
        }}
      >
        <a>©2020 Arrival Ltd. All rights reserved.</a>
        <span>
          <Link href="">Privacy policy</Link>
          <Link href="">info@ARRIVAL.COM</Link>
          <Link>/</Link>
          <Link href="">Twitter</Link>
          <Link href="">Facebook</Link>
          <Link href="">Linkedin</Link>
          <Link href="">Instagram</Link>
        </span>
      </div>
    </Container>
  </footer>
);

const Link = styled.a`
  color: var(--white);
  padding-right: 32px;
  &:last-child {
    padding-right: 0;
  }
`;
const StyledFooter = styled(Footer)`
  background-color: #0f1011;
`;

export default StyledFooter;
