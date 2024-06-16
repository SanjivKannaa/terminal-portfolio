import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Sanjiv Kannaa Jeganathan</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a software developer</HighlightAlt> based in Chennai, TamilNadu, IN.
      </p>
      <p>
        I am passionate about understanding how stuff work and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
