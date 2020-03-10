import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';
import Slider from '../components/slider';

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
        <div dir="rtl">
          <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          {/* <div>
            <Text>UPS & Arrival opportunity</Text>
            <Button>
              <span>View presentation</span>{' '}
              <img src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"></img>
            </Button>
          </div> */}
        </div>
        <div dir="rtl">
          <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          {/* <div>
            <Text>UPS & Arrival opportunity</Text>
            <Button>
              <span>View presentation</span>{' '}
              <img src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"></img>
            </Button>
          </div> */}
        </div>
        <div dir="rtl">
          <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          {/* <div>
            <Text>UPS & Arrival opportunity</Text>
            <Button>
              <span>View presentation</span>{' '}
              <img src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"></img>
            </Button>
          </div> */}
        </div>
      </Slider>
    </Container>

    <div style={{ backgroundColor: 'var(--white)' }}>
      <Container>
        <p
          style={{
            color: 'var(--grey)',
            paddingTop: '64px',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0.02em'
          }}
        >
          Your sales manager
        </p>
        <h1
          style={{
            color: '#23262C',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '44px',
            lineHeight: '56px',
            letterSpacing: '0.02em'
          }}
        >
          Mike Ableson
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            <h3 style={{ color: '#23262C', width: '68%' }}>
              Feel free to contact me whenever you have any questions or ready
              to move forward with us. Let’s change the future of mobility
              together!
            </h3>
            <span style={{ paddingBottom: '80px', paddingTop: '64px' }}>
              <a style={{ color: '#23262C', paddingRight: '40px' }}>
                tel. 0 324 224 2411
              </a>
              <a style={{ color: '#23262C' }}>stanley.baker@example.com</a>
            </span>
          </div>
          <div>
            <img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
          </div>
        </div>
      </Container>
    </div>
  </Layout>
);

const Paragraph = styled.div`
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default IndexPage;
