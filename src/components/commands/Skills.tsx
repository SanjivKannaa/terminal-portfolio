import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  SkillsContainer,
  SkillsDesc,
  SkillsIntro,
  SkillsTitle,
} from "../styles/Skills.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <SkillsIntro>
        Tools and Technologies I've worked with
      </SkillsIntro>
      {projects.map(({ id, title, desc }) => (
        <SkillsContainer key={id}>
          <SkillsTitle>{`${id}. ${title}`}</SkillsTitle>
          <SkillsDesc>{desc}</SkillsDesc>
        </SkillsContainer>
      ))}
      {/* <Usage cmd="projects" marginY /> */}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Programming Languages",
    desc: "Python, GoLang, bash, C, C++",
    url: "",
  },
  {
    id: 2,
    title: "DevOps Tools",
    desc: "Docker, K8s, Jenkins CI/CD, Nginx, Ansible, Terraform (Learning)",
    url: "",
  },
  {
    id: 3,
    title: "DataBases",
    desc: "MySQL, MongoDB, Redis",
    url: "",
  },
  {
    id: 4,
    title: "Technologies I've worked on",
    desc: "gRPC, TOR, Apache Kafka, openVPN",
    url: "",
  },
  {
    id: 5,
    title: "Other Tools",
    desc: "Postman, Wireshark, Burp suite, Linux shell, nmap, etc.",
    url: "",
  },
];

export default Projects;
