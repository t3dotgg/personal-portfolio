import styled from "styled-components";
import NarutoFaceSVG from "../../assets/naruto-face.svg";
import { focusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const NavigationWrapper = styled.nav`
  width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.DarkBrown};
  box-shadow: 0 0.2rem 0.2rem black;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: ${theme.Orange};
  font-family: ${theme.Montserrat};
  font-weight: 700;
  font-size: 2.2rem;
  margin-left: 1rem;
  text-shadow: 0 0.1rem hsl(18, 21%, 23%), 0 0.2rem hsl(18, 21%, 23%),
    0 0.3rem hsl(18, 21%, 23%), 0 0 1rem ${theme.Red};
  ${focusStyles};
`;

export const NarutoFace = styled(NarutoFaceSVG)`
  height: 4.2rem;
  width: 4.2rem;
  margin-right: 1rem;
  filter: drop-shadow(0 0 0.1rem ${theme.Red});
`;
