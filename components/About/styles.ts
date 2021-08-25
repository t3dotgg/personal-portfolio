import styled from "styled-components";
import { theme } from "../../theme/theme";

export const AboutSection = styled.section`
  display: grid;
  width: 100vw;
  align-items: flex-start;
  justify-items: center;
  align-content: space-between;
  grid-template-areas:
    "image"
    "title"
    "text"
    "technologies"
    ".";
  grid-template-rows: 12rem 5rem 29rem 40rem 8rem;
  margin-top: 4rem;
`;

export const AboutImage = styled.img`
  grid-area: image;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0.2rem 0.2rem black;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: relative;
`;

export const AboutTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Oxanium};
  color: ${theme.Pink};
  font-weight: 600;
  font-size: 3rem;
`;

export const AboutTextWrapper = styled.p`
  grid-area: text;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${theme.Orange};
  font-family: ${theme.Montserrat};
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
  width: 25ch;
  height: 100%;
`;

export const AboutText = styled.span`
  display: block;
`;

export const TechnologiesWrapper = styled.div`
  grid-area: technologies;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

export const TechnologiesText = styled.p`
  font-family: ${theme.Montserrat};
  font-size: 1.4rem;
  font-weight: 600;
  width: 26ch;
  text-align: center;
  color: ${theme.Orange};
`;

export const TechnologiesContainer = styled.div`
  height: 80%;
  width: 30rem;
`;
