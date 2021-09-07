import Link from "next/link";
import {
  WorkDescription,
  WorkList,
  WorkSection,
  WorkTitle,
  WorkItem,
  ItemCodeLink,
  ItemDemo,
  ItemDescription,
  ItemLiveLink,
  ItemTitle,
  Github,
  External,
} from "./styles";
import { useOnScreen } from "../../hooks/useOnScreen";
import { projects } from "./projects";

export const Work = () => {
  const { isVisible, setIntersectingElement } = useOnScreen();

  return (
    <WorkSection ref={setIntersectingElement} shouldFadeIn={isVisible}>
      <WorkTitle id="work" tabIndex={-1}>
        Work.
      </WorkTitle>
      <WorkDescription>
        Some recent side projects I have built, including demos, titles,
        descriptions and links.
      </WorkDescription>
      <WorkList>
        {projects.map(
          ({
            title,
            description,
            demoSource,
            sourceCodeLink,
            liveVersionLink,
            id,
          }) => (
            <WorkItem key={id}>
              <ItemTitle>{title}</ItemTitle>
              <ItemDescription>{description}</ItemDescription>
              <ItemDemo
                alt="Demo showcasing the project, what it does and the problem it solves for people."
                src={demoSource}
              />
              <Link href={sourceCodeLink} passHref>
                <ItemCodeLink target="_blank" rel="noopener noreferrer">
                  <Github aria-hidden="true" />
                  Code
                </ItemCodeLink>
              </Link>
              <Link href={liveVersionLink} passHref>
                <ItemLiveLink target="_blank" rel="noopener noreferrer">
                  <External aria-hidden="true" />
                  Live
                </ItemLiveLink>
              </Link>
            </WorkItem>
          )
        )}
      </WorkList>
    </WorkSection>
  );
};
