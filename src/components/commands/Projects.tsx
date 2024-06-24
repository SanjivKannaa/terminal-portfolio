import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
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
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Post-Quantum Network Scanner",
    desc: "Network tool that captures network traffic, analyzes and displays information about the cryptographic algorithms used.",
    url: "http://projects.magickite.tech/network-scanner",
  },
  {
    id: 2,
    title: "ChaosBank",
    desc: "A simple banking website, implemented with Chaos Tools",
    url: "http://projects.magickite.tech/chaosbank",
  },
  {
    id: 3,
    title: "NoCaine",
    desc: "Dark-Web monitoring Tool.",
    url: "http://projects.magickite.tech/nocaine",
  },
  {
    id: 4,
    title: "Gas Leakage Detection system",
    desc: "An automated Gas leakage detection system, embedded system project",
    url: "http://projects.magickite.tech/embeddedproject",
  },
  {
    id: 5,
    title: "Spdier VPN",
    desc: "A VPN service that is used to protect admin-panels, docs from the open internet.",
    url: "http://projects.magickite.tech/spidervpn",
  },
];

export default Projects;
