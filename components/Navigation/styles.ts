import styled, { css } from "styled-components";
import NarutoFaceSVG from "../../assets/naruto-face.svg";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const NavigationWrapper = styled.nav<{ shouldShowShadow: boolean }>`
  width: 100vw;
  height: 6rem;
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
      box-shadow: 0 0.2rem 0.2rem black;
    `};
  ${media.tablet} {
    height: 9rem;
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
    font-size: 3rem;
    margin-left: 2rem;
  }
`;

export const NarutoFace = styled(NarutoFaceSVG)`
  height: 4.2rem;
  width: 4.2rem;
  margin-right: 1rem;
  filter: drop-shadow(0 0 0.1rem ${theme.Red});
  ${media.tablet} {
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
  }
`;

export const IconsWrapper = styled.div`
  position: fixed;
  z-index: 10;
  height: 14rem;
  width: 2rem;
  top: 46%;
  left: 6%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .icon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  ${media.tablet} {
    height: 24rem;
    width: 3rem;
    left: 4%;
  }
`;

export const IconLink = styled.a`
  width: 1.6rem;
  height: 1.6rem;
  color: ${theme.Red};
  text-decoration: none;
  ${focusStyles}
  ${media.tablet} {
    width: 2.1rem;
    height: 2.1rem;
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
  border-top: 0.2rem solid ${theme.Orange};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 -0.5rem 1rem black;
  background-color: ${theme.DarkBrown};
  ${media.tablet} {
    display: none;
  }
`;

export const MobileLink = styled.a`
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
    ${media.tablet} {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  ${media.tablet} {
    justify-content: space-between;
    height: 5.2rem;
  }
`;

export const MobileLinkText = styled.span`
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.4rem;
  color: ${theme.Orange};
  ${media.tablet} {
    font-size: 1.8rem;
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
