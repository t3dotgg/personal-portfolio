import Link from "next/link";
import {
  Heart,
  FooterLink,
  FooterWrapper,
  FooterText,
  External,
} from "./styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        Built & Designed with <Heart aria-hidden="true" /> by{" "}
        <Link href="https://github.com/tigerabrodi" passHref>
          <FooterLink target="_blank" rel="noopener noreferrer">
            <External aria-hidden="true" />
            Tiger Abrodi
          </FooterLink>
        </Link>
      </FooterText>
    </FooterWrapper>
  );
};
