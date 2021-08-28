import Link from "next/link";
import {
  ContactSection,
  ContactDescription,
  ContactLink,
  ContactTitle,
  DescriptionLink,
} from "./styles";

export const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Contact.</ContactTitle>
      <ContactDescription>
        The fastest way to get in touch with me is by sending me a message on
        <Link href="https://twitter.com/TAbrodi" passHref>
          <DescriptionLink target="_blank" rel="noopener noreferrer">
            Twitter.
          </DescriptionLink>
        </Link>
        You can also shoot me an email if you want, whether it is discussing an
        opportunity or asking a question, I will try my best to get back to you.
      </ContactDescription>
      <Link href="mailto:tigerabrodi@gmail.com" passHref>
        <ContactLink>Say Hello</ContactLink>
      </Link>
    </ContactSection>
  );
};
