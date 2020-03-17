import styled from 'styled-components';

export const Background = styled.div`
  margin: 0 auto;
  background-image: url(https://images.ctfassets.net/r0lccig03c53/2mfUI7BGFGn3PUoAOf5lWG/0e127789350e719f4ebb97230b0bcd4f/image.jpg);
  background-size: cover;
  background-position: 91% 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(30, 31, 34, 0.7) 0%,
      rgba(30, 31, 34, 0) 43.23%,
      rgba(30, 31, 34, 0) 72.92%,
      rgba(30, 31, 34, 0.7) 100%
    );
  }
  @media (min-width: 768px) {
    background-postion: 100% 100%;
  }
`;
export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  min-height: 100%;
  @media (min-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (min-width: 1024px) {
    margin-left: 48px;
    margin-right: 48px;
  }
  @media (min-width: 1024px) {
    margin-left: 64px;
    margin-right: 64px;
  }
`;
// export const Row = styled.div`
//   display: flex;
//   flex: ${props => (props.flex ? props.flex : 'initial')};
//   flex-direction: row;
//   flex-wrap: ${props => (props.wrap ? props.wrap : 'initial')};
//   align-content: ${props =>
//     props.alignContent ? props.alignContent : 'initial'};
//   justify-content: ${props =>
//     props.justifyContent ? props.justifyContent : 'initial'};
//   @media screen and (max-width: 768px) {
//     flex-direction: ${props => (props.mobile ? 'column' : 'row')};
//   }
// `;
// export const Column = styled.div`
//   flex: ${props => (props.flex ? props.flex : 'initial')};
//   flex-direction: column;
//   align-content: ${props =>
//     props.alignContent ? props.alignContent : 'initial'};
//   justify-content: ${props =>
//     props.justifyContent ? props.justifyContent : 'initial'};
//   margin: ${props => (props.margin ? props.margin : '0')};
//   width: ${props => (props.width ? props.width : 'auto')};
// `;
