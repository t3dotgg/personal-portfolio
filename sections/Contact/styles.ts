import styled, { css } from "styled-components";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const ContactSection = styled.section<{ shouldFadeIn: boolean }>`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: "title" "description" "link" ".";
  grid-template-rows: 5rem 13rem 13rem 2rem;
  ${media.tablet} {
    grid-template-areas:
      "title"
      "description"
      "link";
    grid-template-rows: 7rem 19rem 22rem;
    margin-top: 16rem;
  }
  ${media.desktop} {
    grid-template-rows: 10rem 21rem 26rem;
  }
  transition: transform 1s, opacity 2s;
  opacity: 0;
  transform: translateY(2rem);
  ${(props) =>
    props.shouldFadeIn &&
    css`
      transform: translateY(-2rem);
      opacity: 1;
    `};
`;

export const ContactTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Oxanium};
  font-weight: 600;
  font-size: 3rem;
  color: ${theme.Pink};
  ${media.tablet} {
    font-size: 6rem;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
`;

export const ContactDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Montserrat};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.3;
  text-align: center;
  color: ${theme.Orange};
  width: 26ch;
  ${media.custom(360)} {
    width: 28ch;
  }
  ${media.tablet} {
    width: 35ch;
    font-size: 2.5rem;
  }
  ${media.desktop} {
    width: 41ch;
  }
`;

export const DescriptionLink = styled.a`
  color: ${theme.Pink};
  text-decoration: underline;
  padding: 0 0.5rem;
  ${secondFocusStyles}
  ${media.tablet} {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContactLink = styled.a`
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
  ${focusStyles}
  ${media.tablet} {
    font-size: 2.5rem;
    padding: 2rem 4rem;
    border: 0.2rem solid ${theme.Orange};
    transition: all 0.2s ease-in;
    &:hover {
      background-color: ${theme.Orange};
      color: ${theme.DarkBrown};
      transform: translateY(-0.3rem);
      box-shadow: 0 0.3rem 0.2rem black;
      &:active {
        transform: translateY(-0.1rem);
        box-shadow: 0 0.1rem 0.2rem black;
      }
    }
  }
`;