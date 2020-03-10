import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Background, Container } from './layoutComponents';

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Background>
      <Container>
        <Nav>
          <StyledLink to="/">Introduction</StyledLink>
          <StyledLink to="/">Opportunities</StyledLink>
          <StyledLink to="/">Contact us</StyledLink>
          <StyledEmail to="/">john@inbox.com</StyledEmail>
        </Nav>
        <Img src="https://images.ctfassets.net/r0lccig03c53/5QxGYnxwbe43emnf6OyYGW/f56327faa7ad7659d74bea5e6c7d71b8/Logo.svg?h=16" />
        <StyledH2Name>Welcome, Alexander! </StyledH2Name>
        <StyledH2>
          Please find below the detailed information about your opportunity with
          Arrival. Feel free to contact us or schedule a meeting.
        </StyledH2>
      </Container>
    </Background>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const StyledHeader = styled(Header)`
  color: var(--white);
  background: transparent;
`;

const StyledLink = styled(Link)`
  padding-right: 25px;
`;

const StyledEmail = styled(Link)`
  margin-left: auto;
`;
const Img = styled.img`
  padding-top: 116px;
`;
const Nav = styled.nav`
  padding-top: 16px;
  font-family: Arrival Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const StyledH2Name = styled.h2`
  color: var(--grey);
`;

const StyledH2 = styled.h2`
  color: var(--white);
`;

export default StyledHeader;
