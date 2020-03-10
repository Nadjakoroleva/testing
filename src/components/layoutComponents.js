import styled from 'styled-components';

export const Background = styled.div`
  margin: 0 auto;
  background-image: url(https://images.ctfassets.net/r0lccig03c53/2mfUI7BGFGn3PUoAOf5lWG/0e127789350e719f4ebb97230b0bcd4f/image.jpg);
  background-size: cover;
  background-position: 100% 100%;
  height: 100vh;
`;
export const Container = styled.div`
  margin-left: 64px;
  margin-right: 64px;
`;
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : 'initial')};
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  }
`;
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : 'initial')};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'initial'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'initial'};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => (props.width ? props.width : 'auto')};
`;
