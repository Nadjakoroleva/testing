import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Background, Container } from './layoutComponents';

const Header = ({ siteTitle, className }) => (
  <div className={className}>
    <Background>
      <Container>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ flex: '1 0 auto' }}>
            <Nav>
              <StyledLink to="/">Introduction</StyledLink>
              <StyledLink to="/">Opportunities</StyledLink>
              <StyledLink to="/">Contact us</StyledLink>
              <StyledEmail to="/">john@inbox.com</StyledEmail>
            </Nav>
            <Img src="https://images.ctfassets.net/r0lccig03c53/5QxGYnxwbe43emnf6OyYGW/f56327faa7ad7659d74bea5e6c7d71b8/Logo.svg?h=16" />
          </div>

          <Grid>
            <div style={{ width: '59%' }}>
              <StyledH2Name>Welcome, Alexander! </StyledH2Name>
              <StyledH2>
                Please find below the detailed information about your
                opportunity with Arrival. Feel free to contact us or schedule a
                meeting.
              </StyledH2>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  textAlign: 'right',
                  paddingRight: '32px',
                  marginTop: 'auto',
                  paddingBottom: '14px'
                }}
              >
                <Name>Mike Ableson</Name>
                <Job>Your sales manager</Job>
              </div>
              <img
                style={{ width: '64px', height: '80px', marginTop: 'auto' }}
                src="https://images.ctfassets.net/r0lccig03c53/5Isa1MTZDgUD8oV9rEftwV/69acfb3462b2b119ff5d0d0c5eab5ac6/team.png"
              />
            </div>
          </Grid>
        </div>
      </Container>
    </Background>
  </div>
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
const Job = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--grey);
`;
const Name = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
`;
const StyledEmail = styled(Link)`
  margin-left: auto;
`;
const Img = styled.img`
  padding-top: 116px;
`;
const Nav = styled.nav`
  display: flex;
  padding-top: 16px;
  font-family: Arrival Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 64px;
`;

const StyledH2Name = styled.h2`
  color: var(--grey);
`;

const StyledH2 = styled.h2`
  color: var(--white);
`;

export default StyledHeader;
