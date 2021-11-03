import styled, { keyframes } from "styled-components";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

const fadeUp = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const HomeSection = styled.section`
  height: calc(100vh - 14rem);
  width: 100%;
  background-color: ${theme.DarkBrown};
  position: relative;
  ${media.tablet} {
    height: 100vh;
  }
`;

export const HomeWrapper = styled.div`
  height: 27rem;
  width: 26rem;
  position: absolute;
  left: 3.7rem;
  top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.custom(360)} {
    left: 4.3rem;
    width: 28rem;
    top: 3.5rem;
  }
  ${media.custom(375)} {
    height: 31.5rem;
    top: 4.2rem;
    left: 4.5rem;
  }
  ${media.custom(410)} {
    left: 5rem;
    width: 30rem;
    height: 33rem;
    top: 5.5rem;
  }
  ${media.tablet} {
    height: 50rem;
    top: 35%;
    left: 40%;
    width: 52rem;
  }
  ${media.desktop} {
    height: 63rem;
    top: 40%;
    left: 35%;
    width: 65rem;
  }
  ${media.desktopL} {
    width: 72rem;
    height: 68rem;
    left: 30%;
    top: 42%;
  }
`;

export const HomeTitle = styled.h1`
  font-family: ${theme.Montserrat};
  font-weight: bold;
  font-size: 4rem;
  color: ${theme.Red};
  animation: ${fadeUp} 0.4s forwards;
  ${media.tablet} {
    font-size: 6rem;
  }
  ${media.desktop} {
    font-size: 7rem;
  }
  ${media.desktopL} {
    font-size: 8rem;
  }
`;

export const HomeSubtitle = styled.h2`
  font-size: 2rem;
  font-family: ${theme.Montserrat};
  font-weight: 600;
  color: ${theme.Pink};
  margin-top: 0.5rem;
  opacity: 0;
  animation: ${fadeUp} 0.3s 0.2s forwards;
  ${media.custom(360)} {
    margin-top: 1rem;
  }
  ${media.tablet} {
    font-size: 4rem;
  }
  ${media.desktop} {
    font-size: 5rem;
  }
  ${media.desktopL} {
    font-size: 5.5rem;
  }
`;

export const HomeDescription = styled.p`
  line-height: 1.3;
  font-family: ${theme.Montserrat};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${theme.Orange};
  opacity: 0;
  animation: ${fadeUp} 0.3s 0.4s forwards;
  margin-top: 1.5rem;
  ${media.custom(360)} {
    font-size: 1.2rem;
    align-self: center;
    margin-top: 2.2rem;
  }
  ${media.custom(375)} {
    margin-top: 2.7rem;
  }
  ${media.custom(410)} {
    margin-top: 2.7rem;
    font-size: 1.3rem;
    line-height: 1.4;
  }
  ${media.tablet} {
    font-size: 1.8rem;
    align-self: center;
  }
  ${media.desktop} {
    font-size: 2.1rem;
    width: 43ch;
  }
  ${media.desktopL} {
    width: 47ch;
  }
`;

export const HomeLink = styled.a`
  color: ${theme.Orange};
  text-decoration: none;
  border-radius: 3px;
  padding: 10px 15px;
  border: 1px solid ${theme.Orange};
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0 0.1rem 0.2rem black;
  margin-top: auto;
  opacity: 0;
  animation: ${fadeUp} 0.3s 0.6s forwards;
  ${focusStyles}
  ${media.custom(360)} {
    font-size: 1.4rem;
  }
  ${media.custom(410)} {
    font-size: 1.5rem;
    padding: 12px 19px;
  }
  ${media.tablet} {
    font-weight: 600;
    border: 2px solid ${theme.Orange};
    box-shadow: 0 0.2rem 0.2rem black;
    align-self: center;
    padding: 17px 30px;
    font-size: 2rem;
    position: relative;
    transition: all 0.2s ease-out;
    &:hover {
      color: ${theme.DarkBrown};
      background-color: ${theme.Orange};
    }
  }
  ${media.desktop} {
    font-size: 2.3rem;
  }
`;

export const DescriptionLink = styled.a`
  color: ${theme.Pink};
  text-decoration: underline;
  ${secondFocusStyles}
  ${media.tablet} {
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease-out;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.35rem;
      transform-origin: left;
      width: 102%;
      height: 105%;
      background-color: #f72405ba;
      transform: scaleX(0) translateX(-0.1rem);
      border-radius: 2px;
      transition: all 0.2s ease-out;
      z-index: -5;
    }
    &:hover {
      transform: scale(1.01);
      &::after {
        transform: scaleX(1) translateX(-0.1rem) rotate(-1deg);
      }
    }
  }
`;
