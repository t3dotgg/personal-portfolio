import Link from "next/link";
import TigerSVG from "../../assets/tiger.svg";
import {
  HomeDescription,
  HomeLink,
  HomeSection,
  HomeSubtitle,
  HomeTitle,
  HomeWrapper,
  DescriptionLink,
} from "./styles";

export const Home = () => (
  <HomeSection>
    <HomeWrapper>
      <HomeTitle>Hi, I&apos;m Tiger.</HomeTitle>
      <HomeSubtitle>I craft things for the web.</HomeSubtitle>
      <HomeDescription>
        I’m a Frontend Craftsman based in Germany who is heavily into
        Accessibility and Testing. I like building side projects,{" "}
        <Link href="https://tigerabrodi.hashnode.dev/" passHref>
          <DescriptionLink target="_blank" rel="noopener noreferrer">
            writing blog posts,
          </DescriptionLink>
        </Link>{" "}
        contributing to Open Source, volunteering in communities and{" "}
        <Link
          href="https://www.goodreads.com/review/list/127384537-tiger-abrodi?ref=nav_mybooks&shelf=read"
          passHref
        >
          <DescriptionLink target="_blank" rel="noopener noreferrer">
            reading books.
          </DescriptionLink>
        </Link>{" "}
      </HomeDescription>
      <Link
        href="mailto:tigerabrodi@gmail.com?subject=Mail%20To%20Tiger%20Abrodi"
        passHref
      >
        <HomeLink>Get In Touch</HomeLink>
      </Link>
    </HomeWrapper>
  </HomeSection>
);
