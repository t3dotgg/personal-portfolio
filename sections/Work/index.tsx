import Link from "next/link";
import madaraDemo from "../../assets/madara.gif";
import ravenyDemo from "../../assets/raveny.gif";
import konohaDemo from "../../assets/konoha.gif";
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

export const Work = () => {
  const { isVisible, setIntersectingElement } = useOnScreen();

  return (
    <WorkSection ref={setIntersectingElement} shouldFadeIn={isVisible}>
      <WorkTitle id="work">Work.</WorkTitle>
      <WorkDescription>
        Some recent side projects I have built, including demos, titles,
        descriptions and links.
      </WorkDescription>
      <WorkList>
        <WorkItem>
          <ItemTitle>Madara</ItemTitle>
          <ItemDescription>
            A way for people to manage their tasks.
          </ItemDescription>
          <ItemDemo
            alt="Demo showcasing the project, what it does and the problem it solves for people."
            src={madaraDemo.src}
          />
          <Link href="https://github.com/tigerabrodi/Madara" passHref>
            <ItemCodeLink target="_blank" rel="noopener noreferrer">
              <Github aria-hidden="true" />
              Code
            </ItemCodeLink>
          </Link>
          <Link href="https://tigerabrodi-madara.netlify.app/" passHref>
            <ItemLiveLink target="_blank" rel="noopener noreferrer">
              <External aria-hidden="true" />
              Live
            </ItemLiveLink>
          </Link>
        </WorkItem>
        <WorkItem>
          <ItemTitle>Raveny</ItemTitle>
          <ItemDescription>
            A website where people can find recipes and find them based on
            different criteria.
          </ItemDescription>
          <ItemDemo
            alt="Demo showcasing the project, what it does and the problem it solves for people."
            src={ravenyDemo.src}
          />
          <Link href="https://github.com/tigerabrodi/Raveny" passHref>
            <ItemCodeLink target="_blank" rel="noopener noreferrer">
              <Github aria-hidden="true" />
              Code
            </ItemCodeLink>
          </Link>
          <Link href="https://raveny.netlify.app/" passHref>
            <ItemLiveLink target="_blank" rel="noopener noreferrer">
              <External aria-hidden="true" />
              Live
            </ItemLiveLink>
          </Link>
        </WorkItem>
        <WorkItem>
          <ItemTitle>Konoha</ItemTitle>
          <ItemDescription>
            A simple way to search for Anime/Manga characters.
          </ItemDescription>
          <ItemDemo
            alt="Demo showcasing the project, what it does and the problem it solves for people."
            src={konohaDemo.src}
          />
          <Link href="https://github.com/tigerabrodi/konoha" passHref>
            <ItemCodeLink target="_blank" rel="noopener noreferrer">
              <Github aria-hidden="true" />
              Code
            </ItemCodeLink>
          </Link>
          <Link href="https://tigerabrodi-konoha.netlify.app/" passHref>
            <ItemLiveLink target="_blank" rel="noopener noreferrer">
              <External aria-hidden="true" />
              Live
            </ItemLiveLink>
          </Link>
        </WorkItem>
      </WorkList>
    </WorkSection>
  );
};
