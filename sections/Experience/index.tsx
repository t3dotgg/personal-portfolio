import * as React from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import {
  ExperienceDescription,
  ExperienceItem,
  ExperienceItemList,
  ExperienceSection,
  ExperienceTitle,
  AccordionButton,
  AccordionContent,
  AccordionButtonText,
  AccordionOpenArrow,
  AccordionButtonTextWrapper,
  AccordionCloseArrow,
  AccordionContentItem,
  AccordionRightArrow,
  AccordionContentText,
} from "./styles";

export const Experience = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isVisible, setIntersectingElement } = useOnScreen();

  const toggleOpenState = () => setIsOpen(!isOpen);

  return (
    <ExperienceSection ref={setIntersectingElement} shouldFadeIn={isVisible}>
      <ExperienceTitle id="experience">Experience.</ExperienceTitle>
      <ExperienceDescription>
        Where I have worked and some of my contributions to the places.
      </ExperienceDescription>
      <ExperienceItemList aria-label="Accordion control group buttons revealing the contributions of the various places I worked.">
        <ExperienceItem>
          <AccordionButton
            aria-controls="content-1"
            aria-expanded={isOpen ? "true" : "false"}
            id="accordion-control-1"
            type="button"
            onClick={toggleOpenState}
          >
            <AccordionButtonTextWrapper>
              <AccordionButtonText>
                Company: Tonies - Boxine GmbH
              </AccordionButtonText>
              <AccordionButtonText>
                Role: Frontend Developer
              </AccordionButtonText>
              <AccordionButtonText>
                Date: July 2020 - Present
              </AccordionButtonText>
            </AccordionButtonTextWrapper>
            {isOpen ? (
              <AccordionCloseArrow aria-hidden="true" />
            ) : (
              <AccordionOpenArrow aria-hidden="true" />
            )}
          </AccordionButton>
          <AccordionContent
            aria-hidden={isOpen ? "false" : "true"}
            id="content-1"
          >
            <AccordionContentItem>
              <AccordionRightArrow aria-hidden="true" />
              <AccordionContentText>
                Heavily worked with React, JavaScript/TypeScript, GraphQL,
                Styled Components, StoryBook, react-i18next and some more
                smaller libraries in our SPA.
              </AccordionContentText>
            </AccordionContentItem>
            <AccordionContentItem>
              <AccordionRightArrow aria-hidden="true" />
              <AccordionContentText>
                Made our SPA more accessible.
              </AccordionContentText>
            </AccordionContentItem>
            <AccordionContentItem>
              <AccordionRightArrow aria-hidden="true" />
              <AccordionContentText>
                Actively wrote tests, integration/unit with Jest and Testing
                Library, and E2E Tests with Pentf and Puppeteer.
              </AccordionContentText>
            </AccordionContentItem>
            <AccordionContentItem>
              <AccordionRightArrow aria-hidden="true" />
              <AccordionContentText>
                Heavily was a part of the recruiting process.
              </AccordionContentText>
            </AccordionContentItem>
            <AccordionContentItem>
              <AccordionRightArrow aria-hidden="true" />
              <AccordionContentText>
                Documented usage of Performance APIs in React.
              </AccordionContentText>
            </AccordionContentItem>
            <AccordionContentItem>
              <AccordionRightArrow aria-hidden="true" />
              <AccordionContentText>
                Advocated technical practices and documented our team practices.
              </AccordionContentText>
            </AccordionContentItem>
          </AccordionContent>
        </ExperienceItem>
      </ExperienceItemList>
    </ExperienceSection>
  );
};
