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
  height: 28rem;
  width: 26rem;
  top: 41%;
  left: 53%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-areas:
    "title"
    "subtitle"
    "description"
    "."
    "link";
  grid-template-rows: 20% 10% 40% 5% 20%;
  align-items: flex-end;
  justify-items: flex-start;
  justify-content: space-between;
  ${media.custom(360)} {
    height: 35rem;
    top: 41%;
    grid-template-rows: 20% 10% 45% 1% 18%;
    left: 51%;
  }
  ${media.tablet} {
    grid-template-areas:
      "title"
      "subtitle"
      "description"
      "link";
    height: 50rem;
    top: 35%;
    left: 40%;
    width: 52rem;
    grid-template-rows: 20% 10% 40% 23%;
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
  grid-area: title;
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
  grid-area: subtitle;
  font-size: 2rem;
  font-family: ${theme.Montserrat};
  font-weight: 600;
  color: ${theme.Pink};
  opacity: 0;
  animation: ${fadeUp} 0.3s 0.2s forwards;
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
  grid-area: description;
  font-family: ${theme.Montserrat};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${theme.Orange};
  opacity: 0;
  animation: ${fadeUp} 0.3s 0.4s forwards;
  ${media.custom(360)} {
    font-size: 1.2rem;
    align-self: center;
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
  grid-area: link;
  color: ${theme.Orange};
  text-decoration: none;
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;
  border: 0.1rem solid ${theme.Orange};
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0 0.1rem 0.2rem black;
  opacity: 0;
  animation: ${fadeUp} 0.3s 0.6s forwards;
  ${focusStyles}
  ${media.tablet} {
    font-weight: 600;
    border: 0.2rem solid ${theme.Orange};
    box-shadow: 0 0.2rem 0.2rem black;
    align-self: center;
    padding: 1.7rem 3rem;
    font-size: 2rem;
    position: relative;
    transition: all 0.2s ease-in;
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
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;
