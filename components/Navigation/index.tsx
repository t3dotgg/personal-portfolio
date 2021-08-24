import Link from "next/link";
import LinkedinSVG from "../../assets/linkedin.svg";
import GithubSVG from "../../assets/github.svg";
import PenSVG from "../../assets/pen.svg";
import TwitterSVG from "../../assets/twitter.svg";
import HammerSVG from "../../assets/hammer.svg";
import FaceSVG from "../../assets/face.svg";
import TimelineSVG from "../../assets/timeline.svg";
import MailSVG from "../../assets/mail.svg";
import {
  LogoLink,
  NarutoFace,
  NavigationWrapper,
  IconsWrapper,
  IconLink,
  MobileNavigationWrapper,
  MobileLink,
  MobileLinkText,
  SkipLink,
} from "./styles";

export const Navigation = () => (
  <>
    <NavigationWrapper>
      <Link href="#home" passHref>
        <SkipLink>Skip The Navigation</SkipLink>
      </Link>
      <Link href="/" passHref>
        <LogoLink>Tiger Abrodi</LogoLink>
      </Link>
      <NarutoFace aria-hidden="true" />
      <IconsWrapper>
        <Link
          href="https://www.linkedin.com/in/tiger-abrodi-467695195/"
          passHref
        >
          <IconLink target="_blank" rel="noopener noreferrer">
            <LinkedinSVG aria-hidden="true" />
          </IconLink>
        </Link>
        <Link href="https://twitter.com/TAbrodi" passHref>
          <IconLink target="_blank" rel="noopener noreferrer">
            <TwitterSVG aria-hidden="true" />
          </IconLink>
        </Link>
        <Link href="https://github.com/tigerabrodi" passHref>
          <IconLink target="_blank" rel="noopener noreferrer">
            <GithubSVG aria-hidden="true" />
          </IconLink>
        </Link>
        <Link href="https://tigerabrodi.hashnode.dev/" passHref>
          <IconLink target="_blank" rel="noopener noreferrer">
            <PenSVG aria-hidden="true" />
          </IconLink>
        </Link>
      </IconsWrapper>
      <MobileNavigationWrapper>
        <Link href="#about" passHref>
          <MobileLink>
            <FaceSVG aria-hidden="true" />
            <MobileLinkText>About</MobileLinkText>
          </MobileLink>
        </Link>
        <Link href="#experience" passHref>
          <MobileLink>
            <TimelineSVG aria-hidden="true" />
            <MobileLinkText>Experience</MobileLinkText>
          </MobileLink>
        </Link>
        <Link href="#work" passHref>
          <MobileLink>
            <HammerSVG aria-hidden="true" />
            <MobileLinkText>Work</MobileLinkText>
          </MobileLink>
        </Link>
        <Link href="#contact" passHref>
          <MobileLink>
            <MailSVG aria-hidden="true" />
            <MobileLinkText>Contact</MobileLinkText>
          </MobileLink>
        </Link>
      </MobileNavigationWrapper>
    </NavigationWrapper>
  </>
);
