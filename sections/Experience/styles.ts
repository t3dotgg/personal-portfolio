import styled, { css } from "styled-components";
import { focusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";
import RightArrowSVG from "../../assets/right-arrow.svg";
import DownArrowSVG from "../../assets/down-arrow.svg";
import UpArrowSVG from "../../assets/up-arrow.svg";
import { media } from "../../theme/media";

export const ExperienceSection = styled.section<{ shouldFadeIn: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
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

export const ExperienceTitle = styled.h1`
  font-family: ${theme.Oxanium};
  font-size: 3rem;
  font-weight: 600;
  color: ${theme.Pink};
  ${media.tablet} {
    font-size: 6rem;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
`;

export const ExperienceDescription = styled.p`
  line-height: 1.5;
  font-family: ${theme.Oxanium};
  font-size: 1.4rem;
  font-weight: 400;
  width: 27ch;
  text-align: center;
  color: ${theme.Orange};
  ${media.tablet} {
    font-size: 3rem;
    width: 29ch;
    margin-top: 15px;
  }
  ${media.desktop} {
    font-size: 3rem;
    width: 40ch;
  }
`;

export const ExperienceItemList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;
  ${media.tablet} {
    margin-top: 80px;
  }
`;

export const ExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25.8rem;
  position: relative;
  left: 0.75rem;
  ${media.tablet} {
    width: 55rem;
  }
  ${media.desktop} {
    width: 65rem;
  }
`;

export const AccordionButton = styled.button`
  width: 100%;
  height: 5rem;
  position: relative;
  z-index: 5;
  border-radius: 5px;
  background-color: ${theme.Orange};
  display: grid;
  grid-template-areas: "text arrow";
  grid-template-columns: 70% 30%;
  grid-template-rows: 80%;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  font-family: ${theme.Oxanium};
  font-weight: 400;
  font-size: 1rem;
  color: ${theme.DarkBrown};
  border: none;
  &[aria-expanded="true"] {
    font-weight: bold;
  }
  ${focusStyles}
  ${media.tablet} {
    font-weight: 500;
    grid-template-columns: 73% 27%;
    height: 8rem;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &[aria-expanded="false"] {
      &:hover {
        box-shadow: 0 0.3rem 0.2rem black;
        transform: translateY(-0.4rem);
      }
    }
  }
  ${media.desktop} {
    height: 9rem;
    grid-template-rows: 85%;
  }
`;

export const AccordionContent = styled.ul`
  visibility: hidden;
  position: relative;
  bottom: 0.5rem;
  height: 2rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  li {
    visibility: hidden;
  }
  &[aria-hidden="false"] {
    visibility: visible;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 33rem;
    width: 100%;
    border: 2px solid ${theme.Orange};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0 0.2rem 0.2rem black;
    transition: all 0.2s ease-in-out;
    ${media.tablet} {
      border: 3px solid ${theme.Orange};
      height: 56rem;
    }
    ${media.desktop} {
      height: 65rem;
    }
    li {
      visibility: visible;
    }
  }
`;

export const AccordionButtonTextWrapper = styled.div`
  grid-area: text;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  ${media.tablet} {
    font-size: 1.6rem;
  }
  ${media.desktop} {
    font-size: 1.7rem;
  }
`;

export const AccordionButtonText = styled.span`
  padding-left: 7.5px;
`;

export const AccordionOpenArrow = styled(DownArrowSVG)`
  width: 3rem;
  height: 1.6rem;
  grid-area: arrow;
  ${media.tablet} {
    width: 6rem;
    height: 3rem;
  }
  ${media.desktop} {
    width: 7rem;
    height: 4rem;
  }
`;

export const AccordionCloseArrow = styled(UpArrowSVG)`
  width: 3rem;
  height: 1.6rem;
  fill: ${theme.DarkBrown};
  grid-area: arrow;
  ${media.tablet} {
    height: 3rem;
    width: 6rem;
  }
  ${media.desktop} {
    height: 4rem;
    width: 7rem;
  }
`;

export const AccordionContentItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  padding-left: 10px;
  ${media.tablet} {
    padding-left: 20px;
  }
`;

export const AccordionRightArrow = styled(RightArrowSVG)`
  min-height: 1rem;
  min-width: 1rem;
  height: 1rem;
  width: 1rem;
  ${media.tablet} {
    width: 1.8rem;
    height: 1.8rem;
    min-height: 1.8rem;
    min-width: 1.8rem;
  }
  ${media.desktop} {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const AccordionContentText = styled.p`
  font-family: ${theme.Montserrat};
  color: ${theme.Orange};
  font-weight: 500;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 0.8rem;
  align-self: center;
  font-size: 1rem;
  max-width: 43ch;
  ${media.tablet} {
    position: relative;
    bottom: 0.2rem;
    padding-left: 10px;
    font-size: 1.7rem;
  }
  ${media.desktop} {
    max-width: 55ch;
    font-size: 1.7rem;
  }
`;
