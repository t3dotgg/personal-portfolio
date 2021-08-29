import styled from "styled-components";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const HomeSection = styled.section`
  height: 43rem;
  width: 100vw;
  background-color: ${theme.DarkBrown};
  position: relative;
  ${media.custom(360)} {
    height: 60rem;
  }
  ${media.tablet} {
    height: 100vh;
  }
`;

export const HomeWrapper = styled.div`
  height: 30rem;
  width: 26rem;
  top: 43%;
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
`;

export const HomeTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Montserrat};
  font-weight: bold;
  font-size: 4rem;
  color: ${theme.Red};
  ${media.tablet} {
    font-size: 6rem;
  }
`;

export const HomeSubtitle = styled.h2`
  grid-area: subtitle;
  font-size: 2rem;
  font-family: ${theme.Montserrat};
  font-weight: 600;
  color: ${theme.Pink};
  ${media.tablet} {
    font-size: 4rem;
  }
`;

export const HomeDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Montserrat};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme.Orange};
  ${media.tablet} {
    font-size: 1.8rem;
    align-self: center;
  }
`;

export const HomeLink = styled.a`
  grid-area: link;
  color: ${theme.Orange};
  text-decoration: none;
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;
  border: 0.1rem solid var(--orange);
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0 0.1rem 0.2rem black;
  ${focusStyles}
  ${media.tablet} {
    border: 0.2rem solid ${theme.Orange};
    align-self: center;
    padding: 1.7rem 3rem;
    font-size: 1.8rem;
  }
`;

export const DescriptionLink = styled.a`
  color: ${theme.Pink};
  text-decoration: underline;
  ${secondFocusStyles}
`;
