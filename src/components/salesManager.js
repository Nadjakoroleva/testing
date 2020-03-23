import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const IMAGE_SRC =
  'https://images.ctfassets.net/r0lccig03c53/5pRwxmEGZuymUc6D5prUnv/c865738f7f52cef73b47d21fd3b12cae/Shade.png';

const JobTitle = styled.p`
  color: rgba(0, 0, 0, 0.4);
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
`;

const Text = styled.h4`
  color: var(--lightBlack);
  font-size: 20px;
  line-height: 32px;
  padding-top: 32px;
  @media (min-width: 1024px) {
    padding-top: 64px;
  }
  @media (min-width: 1024px) {
    padding-right: 20px;
  }
  @media (min-width: 1366px) {
    padding-right: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 370px) {
    grid-template-rows: 1fr 0fr;
  }
  @media (min-width: 480px) {
    grid-template-rows: 1fr 1.5fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr;
  }
  @media (min-width: 1366px) {
    grid-template-columns: repeat(16, 1fr);
  }
`;

const TextColumn = styled.div`
  grid-column: 1/5;
  align-self: end;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-bottom: 64px;
  }
  @media (min-width: 1024px) {
    grid-column: 1/5;
    align-self: end;
    padding-bottom: 72px;
  }
  @media (min-width: 1366px) {
    grid-column: 1/10;
  }
  @media (min-width: 1680px) {
    padding-bottom: 80px;
    grid-column: 1/7;
    padding-right: 20px;
  }
`;

const Img = styled.img`
  grid-column: 1/3;
  grid-row: 2/3;
  padding-top: 30px;
  align-self: end;
  @media (min-width: 768px) {
    grid-column: 5/8;
    max-width: 345px;
    grid-row: 1/3;
    padding-top: 0;
  }
  @media (min-width: 1024px) {
    grid-column: 5/9;
    max-width: 100%;
  }
  @media (min-width: 1366px) {
    grid-column: 12/17;
    max-width: 385px;
  }
  @media (min-width: 1680px) {
    max-width: 460px;
  }
`;

const LinkContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const StyledLink = styled.a`
  color: #23262c;
  margin-right: 40px;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: '';
    background-color: transparent;
    width: 1px;
    height: 1px;
    transition: width 0.3s ease-in-out;
  }
  &:hover:after {
    background-color: #23262c;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding-top: 32px;
  @media (min-width: 1024px) {
    padding-top: 48px;
  }
`;

const StyledH1 = styled.h1`
  color: #23262c;
  padding-top: 5px;
  font-size: 36px;
  line-height: 48px;
  @media (min-width: 768px) {
    font-size: 44px;
    line-height: 56px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 50px;
  }
`;

const SalesManager = () => {
  const size = useWindowSize().width;
  const ratio = settingXRatio();
  function settingXRatio() {
    if (size >= 1679) {
      return {
        x: 32,
        numForJobTitle: 3,
        numForPaddingBottom: 3
      };
    } else if (size >= 1365) {
      return {
        x: 24,
        numForJobTitle: 3,
        numForPaddingBottom: 3
      };
    } else if (size >= 1023) {
      return {
        x: 24,
        numForJobTitle: 3,
        numForPaddingBottom: 2
      };
    } else if (size >= 767) {
      return {
        x: 32,
        numForJobTitle: 2,
        numForPaddingBottom: 2
      };
    } else if (size >= 374) {
      return {
        x: 32,
        numForJobTitle: 2,
        numForPaddingBottom: 1
      };
    }
    return {
      x: 32,
      numForJobTitle: 2,
      numForPaddingBottom: 1
    };
  }

  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? size : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize());

    useEffect(() => {
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  const paddingForJobTitle = {
    paddingTop: `${ratio.x * ratio.numForJobTitle}px`
  };
  console.log(ratio.numForJobTitle);

  return (
    <div>
      <JobTitle style={paddingForJobTitle}>Your sales manager</JobTitle>
      <StyledH1>Mike Ableson</StyledH1>
      <Grid>
        <TextColumn>
          <Text>
            Feel free to contact me whenever you have any questions or ready to
            move forward with us. Let’s change the future of mobility together!
          </Text>
          <LinkContainer>
            <Wrapper>
              <StyledLink>tel. 0 324 224 2411</StyledLink>
            </Wrapper>
            <Wrapper>
              <StyledLink>stanley.baker@example.com</StyledLink>
            </Wrapper>
          </LinkContainer>
        </TextColumn>
        <Img src={IMAGE_SRC} />
      </Grid>
    </div>
  );
};

export default SalesManager;
