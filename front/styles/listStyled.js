import styled, { ThemeProvider, keyframes } from 'styled-components';
import theme from '../common/theme';

function ThemeBox({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const logoLeft = keyframes`
0% {
  transform: rotate(45deg);
  opacity: 0;
}
100% {
  transform: rotate(0deg);
  opacity: 1;
}
`;
const logoRight = keyframes`
0% {
  transform: rotate(-45deg);
  opacity: 0;
}
100% {
  transform: rotate(0deg);
  opacity: 1;
}
`;

const logoLeftLoop = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(5deg);
}`;

const logoRightLoop = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(-5deg);
}
`;

const TestBox = styled.div`
  color: #ff0000;
  h1 {
    color: #fff000;
  }
`;

const logoEffect = styled.div`
  .logo {
    display: block;
    position: relative;
    width: 20rem;
    height: 20rem;
    margin: auto;
    padding-top: 13.5rem;
    font-weight: 300;
    font-size: 2.4rem;
    color: #4b7c5e;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 4.3rem;
      bottom: 0.5rem;
      left: 0rem;
      width: 5rem;
      height: 5rem;
      margin: auto;
      background: url(assets/images/img_logo_left.png) no-repeat 50% 50% / 100% auto;
      animation: ${logoRight} 1s forwards, logoLeftLoop 2s 1s infinite alternate;
      transform-origin: 100% 100%;
      opacity: 0;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0.5rem;
      left: 6.3rem;
      width: 5rem;
      height: 5rem;
      margin: auto;
      background: url(assets/images/img_logo_right.png) no-repeat 50% 50% / 100% auto;
      animation: ${logoLeft} 1s 0.2s forwards, logoRightLoop 2s 1.2s infinite alternate;
      transform-origin: 0% 100%;
      opacity: 0;
    }
  }
`;

const listStyled = {
  ThemeBox,
  TestBox,
  logoEffect,
};

export default listStyled;
