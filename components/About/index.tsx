import {
  AboutSection,
  AboutImage,
  AboutTitle,
  AboutText,
  AboutTextWrapper,
  TechnologiesWrapper,
  TechnologiesText,
  TechnologiesContainer,
} from "./styles";
import FaceImage from "../../assets/avatar.jpeg";

export const About = () => (
  <AboutSection>
    <AboutImage src={FaceImage.src} alt="Tiger, smiling brightly." />
    <AboutTitle>About Me.</AboutTitle>
    <AboutTextWrapper>
      <AboutText>
        Hi! I’m Tiger and I love crafting things for the web. I discovered my
        passion for Web Development after having tried out Game Development back
        in 2016.
      </AboutText>
      <AboutText>
        I started working as a Frontend Developer in July 2020, and ever since,
        it has been an amazing adventure for me.
      </AboutText>
      <AboutText>
        If I’m not doing anything coding-related, I enjoy lifting weights, doing
        kickboxing, watching anime and spending time with my family.
      </AboutText>
    </AboutTextWrapper>
    <TechnologiesWrapper>
      <TechnologiesText>
        Some tools, technologies or concepts I’m familiar or have worked with:
      </TechnologiesText>
      <TechnologiesContainer />
    </TechnologiesWrapper>
  </AboutSection>
);
