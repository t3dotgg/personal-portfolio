import styled, { css, keyframes } from "styled-components";
import NarutoFaceSVG from "../../assets/naruto-face.svg";
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

export const NavigationWrapper = styled.nav<{ shouldShowShadow: boolean }>`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.DarkBrown};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  ${(props) =>
    props.shouldShowShadow &&
    css`
      box-shadow: 0 0.3rem 0.2rem black;
    `};
  ${media.tablet} {
    height: 11rem;
  }
`;

export const NavigationTabletWrapper = styled.div`
  ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: ${theme.Orange};
  font-family: ${theme.Oxanium};
  font-weight: 700;
  font-size: 2.5rem;
  margin-left: 1rem;
  text-shadow: 0 0.1rem hsl(18, 21%, 23%), 0 0.2rem hsl(18, 21%, 23%),
    0 0.3rem hsl(18, 21%, 23%), 0 0 1rem #f72405ba;
  ${focusStyles};
  ${media.tablet} {
    font-size: 3.5rem;
    margin-left: 3rem;
  }
  ${media.desktopL} {
    margin-left: 4rem;
    font-size: 3.8rem;
  }
`;

export const NarutoFace = styled(NarutoFaceSVG)`
  height: 4.2rem;
  width: 4.2rem;
  margin-right: 1.5rem;
  filter: drop-shadow(0 0 0.1rem ${theme.Red});
  ${media.tablet} {
    width: 5.5rem;
    height: 5.5rem;
    margin-right: 2rem;
    position: relative;
  }
  ${media.desktopL} {
    margin-right: 3rem;
    height: 6rem;
    width: 6rem;
  }
`;

export const IconsWrapper = styled.div`
  position: fixed;
  z-index: 10;
  height: 15rem;
  width: 2rem;
  top: 46%;
  left: 5%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.custom(360)} {
    left: 6%;
    height: 17rem;
  }
  ${media.tablet} {
    width: 4rem;
    left: 4%;
    height: 30vh;
    top: 50%;
  }
  ${media.desktop} {
    left: 3%;
  }
  ${media.desktopL} {
    left: 2%;
  }
`;

export const IconLink = styled.a`
  width: 2rem;
  height: 2rem;
  color: ${theme.Orange};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:nth-of-type(1) {
    animation: ${fadeUp} 0.3s 1.2s forwards;
  }

  &:nth-of-type(2) {
    animation: ${fadeUp} 0.3s 1.3s forwards;
  }

  &:nth-of-type(3) {
    animation: ${fadeUp} 0.3s 1.5s forwards;
  }

  &:nth-of-type(4) {
    animation: ${fadeUp} 0.3s 1.6s forwards;
  }
  .icon {
    width: 80%;
    height: 80%;
    transition: all 0.2s;
    fill: currentColor;
    path {
      fill: currentColor;
    }
  }
  ${focusStyles}
  ${media.tablet} {
    width: 3.3rem;
    height: 3.3rem;
    transition: all 0.2s;
    &:hover {
      .icon {
        fill: ${theme.Pink};
        transform: scale(1.02) translateY(-0.2rem);
        filter: drop-shadow(0 0.1rem 0.1rem ${theme.Pink});
        path {
          fill: ${theme.Pink};
        }
      }
    }
  }
`;

export const MobileNavigationWrapper = styled.div`
  width: 100vw;
  z-index: 10;
  height: 8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid ${theme.Orange};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 -0.5rem 1rem black;
  background-color: ${theme.DarkBrown};
  ${media.tablet} {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 5.5rem;
  width: 7.5rem;
  color: ${theme.Pink};
  ${secondFocusStyles}
  .icon-nav {
    width: 2.2rem;
    height: 2.2rem;
    fill: currentColor;
    transition: all 0.2s;
    path {
      transition: all 0.2s;
    }
    ${media.tablet} {
      width: 3rem;
      height: 3rem;
    }
  }
  ${media.tablet} {
    display: inline-block;
    position: relative;
    height: auto;
    width: auto;
    font-size: 2.2rem;
    font-family: ${theme.Oxanium};
    font-weight: 500;
    transition: all 0.3s;
    ${focusStyles};
    ${media.desktop} {
      font-size: 2.4rem;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.2rem;
      transform-origin: left;
      width: 102%;
      height: 110%;
      background-color: #f72405ba;
      transform: scaleX(0) translateX(-0.3rem);
      border-radius: 2px;
      transition: all 0.2s ease-out;
      z-index: -5;
    }
    &:hover {
      transform: scale(1.05);
      &::after {
        transform: scaleX(1) translateX(-0.1rem) rotate(-1deg);
      }
    }
  }
`;

export const LinkText = styled.span`
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.4rem;
  color: ${theme.Orange};
  ${media.tablet} {
    font-weight: 600;
    transition: all 0.2s;
    font-size: 2rem;
  }
  ${media.desktop} {
    font-size: 2.4rem;
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  left: -99rem;
  width: 0.1rem;
  height: 0.1rem;
  top: auto;
  text-decoration: underline;

  &:focus {
    position: absolute;
    top: 16%;
    left: 3%;
    width: 18rem;
    height: 5rem;
    color: ${theme.Orange};
    background-color: ${theme.DarkBrown};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: ${theme.Montserrat};
    font-weight: 500;
    box-shadow: 0 0.2rem 0.2rem black;
    outline: 0.2rem ridge ${theme.Orange};
    ${media.tablet} {
      width: 22rem;
      height: 6rem;
      font-size: 1.8rem;
      left: 2%;
    }
    ${media.desktopL} {
      width: 24rem;
    }
  }
`;

export const IntersectingElement = styled.div`
  height: 0.1rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  visibility: hidden;
  z-index: -1000;
`;
