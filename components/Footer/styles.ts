import styled from "styled-components";
import HeartSVG from "../../assets/heart.svg";
import ExternalSVG from "../../assets/external.svg";
import { theme } from "../../theme/theme";
import { media } from "../../theme/media";
import { focusStyles } from "../../theme/sharedStyles";

export const FooterWrapper = styled.footer`
  height: 13rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  ${media.tablet} {
    align-items: center;
    margin-top: 10rem;
  }
  ${media.desktop} {
    height: 17rem;
  }
`;

export const FooterText = styled.p`
  font-family: ${theme.Oxanium};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${theme.Orange};
  display: flex;
  align-items: center;
  ${media.tablet} {
    font-size: 2.5rem;
  }
`;

export const Heart = styled(HeartSVG)`
  height: 2rem;
  width: 2rem;
  margin: 0 0.5rem;
  ${media.tablet} {
    width: 4rem;
    height: 4rem;
    margin: 0 0.75rem;
  }
`;

export const FooterLink = styled.a`
  color: ${theme.Pink};
  position: relative;
  text-decoration: underline;
  margin-left: 0.5rem;
  ${focusStyles}
  ${media.tablet} {
    margin-left: 0.75rem;
  }
`;

export const External = styled(ExternalSVG)`
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  right: 0;
  top: -1.3rem;
  left: 7.6rem;
  fill: ${theme.Pink};
  ${media.tablet} {
    height: 2rem;
    width: 2rem;
    top: -2.2rem;
    left: 13.6rem;
  }
`;
