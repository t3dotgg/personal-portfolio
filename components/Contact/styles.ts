import styled from "styled-components";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

export const ContactSection = styled.section`
  width: 100vw;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: "title" "description" "link" ".";
  grid-template-rows: 6rem 15rem 10rem 5rem;
`;

export const ContactTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Oxanium};
  font-weight: 600;
  font-size: 3rem;
  color: ${theme.Pink};
`;

export const ContactDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Montserrat};
  font-weight: 400;
  font-size: 1.4rem;
  width: 25ch;
  text-align: center;
  color: ${theme.Orange};
`;

export const DescriptionLink = styled.a`
  color: ${theme.Pink};
  text-decoration: underline;
  padding: 0 0.5rem;
  ${secondFocusStyles}
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
`;
