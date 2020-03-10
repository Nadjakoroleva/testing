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
          color: 'var(--grey)'
        }}
      >
        <a>©2020 Arrival Ltd. All rights reserved.</a>
      </div>
    </Container>
  </footer>
);

const StyledFooter = styled(Footer)``;

export default StyledFooter;
