import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';
import Slider from '../components/slider/index';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container style={{ paddingTop: '96px', marginBottom: '128px' }}>
      <Paragraph>
        <div style={{ width: '60%' }}>
          <span style={{ color: 'var(--grey)' }}>Presentations.</span>{' '}
          <span>
            We’ve crafted a unique opportunity that fits for the needs of your
            business and your company structure.
          </span>
        </div>
      </Paragraph>
      <Slider slidesToShow={2.1}>
        <div style={{ position: 'relative' }}>
          <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          <div style={{ position: 'absolute', bottom: '0' }}>
            <Text>UPS & Arrival opportunity</Text>
            <Button>View presentation</Button>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          <div style={{ position: 'absolute', bottom: '0' }}>
            <p>UPS & Arrival opportunity</p>
            <Button>View presentation</Button>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          <div style={{ position: 'absolute', bottom: '0' }}>
            <p>UPS & Arrival opportunity</p>
            <Button>View presentation</Button>
          </div>
        </div>
      </Slider>
    </Container>
  </Layout>
);

const Paragraph = styled.p`
  border-top: 1px solid var(--grey);
  padding-top: 31px;
  padding-bottom: 64px;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: var(--white);
`;
const Button = styled.button`
  font-family: Arrival Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #23262c;
  padding: 24px 36px 24px 32px;
  margin-top: 40px;
`;

export default IndexPage;
