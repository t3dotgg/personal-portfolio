import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";
import GithubSVG from "../../assets/github.svg";
import ExternalSVG from "../../assets/external.svg";
import { focusStyles } from "../../theme/sharedStyles";

export const WorkSection = styled.section`
  width: 100vw;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: "title" "description" "list" ".";
  grid-template-rows: 5rem 5rem auto 3rem;
`;

export const WorkTitle = styled.h1`
  font-family: ${theme.Oxanium};
  font-weight: 600;
  font-size: 3rem;
  color: ${theme.Pink};
`;

export const WorkDescription = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  font-family: ${theme.Montserrat};
  color: ${theme.Orange};
  text-align: center;
  width: 28ch;
`;

export const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;
  row-gap: 2rem;
`;

export const WorkItem = styled.li`
  width: 21rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-areas: "title title" "description description" "demo demo" "code live";
  border-bottom: 0.2rem solid ${theme.Orange};
  padding-bottom: 1rem;
`;

export const ItemTitle = styled.h2`
  grid-area: title;
  font-weight: 600;
  font-family: ${theme.Oxanium};
  font-size: 2rem;
  color: ${theme.Pink};
  text-decoration: underline;
`;

export const ItemDescription = styled.p`
  grid-area: description;
  font-weight: 400;
  font-family: ${theme.Montserrat};
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-align: center;
  color: ${theme.Orange};
`;

export const ItemDemo = styled.img`
  grid-area: demo;
  width: 20rem;
  height: 13rem;
  box-shadow: 0 0.2rem 0.4rem black;
  margin-top: 2rem;
`;

const linkStyles = css`
  font-weight: 600;
  font-size: 1.7rem;
  font-family: ${theme.Oxanium};
  color: ${theme.Pink};
  text-decoration: none;
  position: relative;
  margin-top: 3rem;
  ${focusStyles}
`;

export const ItemCodeLink = styled.a`
  grid-area: code;
  ${linkStyles}
`;

export const ItemLiveLink = styled.a`
  grid-area: live;
  ${linkStyles}
`;

const iconStyles = css`
  fill: ${theme.Pink};
  position: absolute;
  right: 0;
`;

export const Github = styled(GithubSVG)`
  top: -1.1rem;
  left: 3.5rem;
  height: 1.2rem;
  width: 1.2rem;
  ${iconStyles}
  path {
    fill: ${theme.Pink};
  }
`;

export const External = styled(ExternalSVG)`
  top: -0.9rem;
  left: 3.2rem;
  height: 1.1rem;
  width: 1.1rem;
  ${iconStyles}
`;
