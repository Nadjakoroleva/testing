import React from 'react';
import styled from 'styled-components';

const SalesManager = () => (
  <div>
    <p
      style={{
        color: 'rgba(0, 0, 0, 0.4)',
        paddingTop: '64px',
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
        fontWeight: '300',
        fontSize: '44px',
        lineHeight: '56px',
        letterSpacing: '0.02em'
      }}
    >
      Mike Ableson
    </h1>
    <Grid>
      <TextColumn>
        <h3 style={{ color: '#23262C', paddingBottom: '64px' }}>
          Feel free to contact me whenever you have any questions or ready to
          move forward with us. Let’s change the future of mobility together!
        </h3>
        <span>
          <a
            style={{
              color: '#23262C',
              paddingRight: '40px',
              cursor: 'pointer'
            }}
          >
            tel. 0 324 224 2411
          </a>
          <a style={{ color: '#23262C', cursor: 'pointer' }}>
            stanley.baker@example.com
          </a>
        </span>
      </TextColumn>
      <Img src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png" />
    </Grid>
  </div>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
`;
const TextColumn = styled.div`
  grid-column: 1/9;
  align-self: end;
  margin-bottom: 80px;
`;
const Img = styled.img`
  grid-column: 10/17;
`;

export default SalesManager;
