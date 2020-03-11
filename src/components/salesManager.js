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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <h3 style={{ color: '#23262C', width: '68%' }}>
          Feel free to contact me whenever you have any questions or ready to
          move forward with us. Let’s change the future of mobility together!
        </h3>
        <span style={{ paddingBottom: '80px', paddingTop: '64px' }}>
          <a style={{ color: '#23262C', paddingRight: '40px' }}>
            tel. 0 324 224 2411
          </a>
          <a style={{ color: '#23262C' }}>stanley.baker@example.com</a>
        </span>
      </div>
      <div>
        <img
          style={{ position: 'relative', top: '8px' }}
          src="https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png"
        />
      </div>
    </div>
  </div>
);

export default SalesManager;
