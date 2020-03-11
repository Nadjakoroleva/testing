import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Slider from '../components/slider';

const Presentation = () => (
  <div>
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
      <div>
        <img src="https://images.ctfassets.net/r0lccig03c53/35C5tVY6sddXuYr2hLqHAN/06357a178b4cfd9e6af6ba9902bc7e5b/image.png" />
        <div>
          <Text>UPS & Arrival opportunity</Text>
          <Button>
            <span style={{ paddingRight: '30px' }}>View presentation</span>{' '}
            <img
              style={{ position: 'relative', top: '-1px' }}
              src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"
            ></img>
          </Button>
        </div>
      </div>
      <div>
        <img src="https://images.ctfassets.net/r0lccig03c53/35C5tVY6sddXuYr2hLqHAN/06357a178b4cfd9e6af6ba9902bc7e5b/image.png" />
        <div>
          <Text>UPS & Arrival opportunity</Text>
          <Button>
            <span style={{ paddingRight: '30px' }}>View presentation</span>{' '}
            <img
              style={{ position: 'relative', top: '-1px' }}
              src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"
            ></img>
          </Button>
        </div>
      </div>
      <div>
        <img src="https://images.ctfassets.net/r0lccig03c53/35C5tVY6sddXuYr2hLqHAN/06357a178b4cfd9e6af6ba9902bc7e5b/image.png" />
        <div>
          <Text>UPS & Arrival opportunity</Text>
          <Button>
            <span style={{ paddingRight: '30px' }}>View presentation</span>{' '}
            <img
              style={{ position: 'relative', top: '-1px' }}
              src="https://images.ctfassets.net/r0lccig03c53/5yGknuw2gHOUSNjUe3u5sJ/0c85b029b3691a2734b709cab01b33f1/Polygon_1__Stroke_.svg?h=8"
            ></img>
          </Button>
        </div>
      </div>
    </Slider>
  </div>
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

export default Presentation;
