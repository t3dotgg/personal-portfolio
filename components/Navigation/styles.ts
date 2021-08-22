import styled from "styled-components";
import NarutoFaceSVG from "../../assets/naruto-face.svg";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const NavigationWrapper = styled.nav`
  width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.DarkBrown};
  box-shadow: 0 0.2rem 0.2rem black;
  position: relative;
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
`;

export const NarutoFace = styled(NarutoFaceSVG)`
  height: 4.2rem;
  width: 4.2rem;
  margin-right: 1rem;
  filter: drop-shadow(0 0 0.1rem ${theme.Red});
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
`;

export const IconLink = styled.a`
  width: 1.6rem;
  height: 1.6rem;
  color: ${theme.Red};
  text-decoration: none;
  ${focusStyles}
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
  .icon {
    width: 2.2rem;
    height: 2.2rem;
    fill: currentColor;
  }
`;

export const MobileLinkText = styled.span`
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.4rem;
  color: ${theme.Orange};
`;
