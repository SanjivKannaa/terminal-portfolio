import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science and Engineering",
    desc: "National Institute of Technology, Tiruchirappalli | 2021 - 2025",
  },
  {
    title: "Class XII",
    desc: "Maharishi Vidya Mandir, Chennai | 2021",
  },
  {
    title: "Class X",
    desc: "Maharishi Vidya Mandir, Chennai | 2019",
  },
];

export default Education;
