import styled from "styled-components";
import HeartSVG from "../../assets/heart.svg";
import ExternalSVG from "../../assets/external.svg";
import { theme } from "../../theme/theme";

export const FooterWrapper = styled.footer`
  height: 13rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterText = styled.p`
  font-family: ${theme.Oxanium};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${theme.Orange};
  display: flex;
  align-items: center;
`;

export const Heart = styled(HeartSVG)`
  height: 2rem;
  width: 2rem;
  margin: 0 0.5rem;
`;

export const FooterLink = styled.a`
  color: ${theme.Pink};
  position: relative;
  text-decoration: underline;
  margin-left: 0.5rem;
`;

export const External = styled(ExternalSVG)`
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  right: 0;
  top: -1.3rem;
  left: 7.6rem;
  fill: ${theme.Pink};
`;
