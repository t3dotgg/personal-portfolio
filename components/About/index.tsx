import {
  AboutSection,
  AboutImage,
  AboutTitle,
  AboutText,
  AboutTextWrapper,
  TechnologiesWrapper,
  TechnologiesText,
  TechnologiesContainer,
  TechnologyText,
  TechnologyItem,
  RightArrow,
  TechnologiesList,
} from "./styles";
import FaceImage from "../../assets/avatar.jpeg";
import { useOnScreen } from "../../hooks/useOnScreen";

export const About = () => {
  const { isVisible, setIntersectingElement } = useOnScreen();

  return (
    <AboutSection ref={setIntersectingElement} shouldFadeIn={isVisible}>
      <AboutImage src={FaceImage.src} alt="Tiger, smiling brightly." />
      <AboutTitle id="about">About Me.</AboutTitle>
      <AboutTextWrapper>
        <AboutText>
          Hi! I’m Tiger and I love crafting things for the web. I discovered my
          passion for Web Development after having tried out Game Development
          back in 2016.
        </AboutText>
        <AboutText>
          I started working as a Frontend Developer in July 2020, and ever
          since, it has been a wonderful adventure for me.
        </AboutText>
        <AboutText>
          If I’m not doing anything coding-related, I enjoy lifting weights,
          doing kickboxing, watching anime or spending time with my family.
        </AboutText>
      </AboutTextWrapper>
      <TechnologiesWrapper>
        <TechnologiesText>
          Some tools, technologies or concepts I’m familiar or have worked with:
        </TechnologiesText>
        <TechnologiesContainer>
          <TechnologiesList>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>React</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>GraphQL (URQL)</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>TypeScript</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Jest</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Cypress</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>TDD</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>NextJS</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>XP Practices</TechnologyText>
            </TechnologyItem>
          </TechnologiesList>

          <TechnologiesList>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Storybook</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Puppeteer</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Firebase</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Styled Components</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Interviewing</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Accessibility</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Figma</TechnologyText>
            </TechnologyItem>
            <TechnologyItem>
              <RightArrow aria-hidden="true" />
              <TechnologyText>Testing Library</TechnologyText>
            </TechnologyItem>
          </TechnologiesList>
        </TechnologiesContainer>
      </TechnologiesWrapper>
    </AboutSection>
  );
};
