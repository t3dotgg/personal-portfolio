import Link from "next/link";
import LinkedinSVG from "../../assets/linkedin.svg";
import GithubSVG from "../../assets/github.svg";
import PenSVG from "../../assets/pen.svg";
import TwitterSVG from "../../assets/twitter.svg";
import {
  LogoLink,
  NarutoFace,
  NavigationWrapper,
  IconsWrapper,
  IconLink,
} from "./styles";

export const Navigation = () => (
  <>
    <NavigationWrapper>
      <Link href="/" passHref>
        <LogoLink>Tiger Abrodi</LogoLink>
      </Link>
      <NarutoFace />
    </NavigationWrapper>
    <IconsWrapper>
      <Link href="https://www.linkedin.com/in/tiger-abrodi-467695195/" passHref>
        <IconLink target="_blank" rel="noopener noreferrer">
          <LinkedinSVG />
        </IconLink>
      </Link>
      <Link href="https://twitter.com/TAbrodi" passHref>
        <IconLink target="_blank" rel="noopener noreferrer">
          <TwitterSVG />
        </IconLink>
      </Link>
      <Link href="https://github.com/tigerabrodi" passHref>
        <IconLink target="_blank" rel="noopener noreferrer">
          <GithubSVG />
        </IconLink>
      </Link>
      <Link href="https://tigerabrodi.hashnode.dev/" passHref>
        <IconLink target="_blank" rel="noopener noreferrer">
          <PenSVG />
        </IconLink>
      </Link>
    </IconsWrapper>
  </>
);
