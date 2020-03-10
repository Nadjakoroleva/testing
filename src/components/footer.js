import React from 'react';
import styled from 'styled-components';
import { Container } from './layoutComponents';

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <p>hello</p>
    </Container>
  </footer>
);

const StyledFooter = styled(Footer)``;

export default StyledFooter;
