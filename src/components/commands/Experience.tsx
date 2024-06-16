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
} from "../styles/Experience.styled";
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
      "Actions speak louder than words, right? Here's the proof.<br />
      Check out some of my notable experiences that shaped my journey
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      {/* <Usage cmd="projects" marginY /> */}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Internship under NTU Singapore, 2024",
    desc: "Worked on a network scanner project on the topic of Post-Quantum Cryptography for a start-up under the incubation center of NTU singapore",
    url: "",
  },
  {
    id: 2,
    title: "Spider R&D, NITT, 2021-2025",
    desc: "I am part of a software research and development club of NITT. I have worked on several projects and have contributed on the domain of DevOps, Backend-development, hosting, etc",
    url: "",
  },
  {
    id: 3,
    title: "SIH Hackathon, 2024",
    desc: "My team, O(n!) won the First Prize on the problem statement of 'Data compression for Backbone system'.",
    url: "",
  },
  {
    id: 4,
    title: "RACCAM Hackathon, 2024",
    desc: "My team participated in the 'Rajasthan Police Cyber Crime Awareness Mission' Hackathon and won the 2nd prize on the domain of 'DarkWeb Monitoring'.",
    url: "",
  },
  {
    id: 5,
    title: "Kavach Hackathon, 2023",
    desc: "Kavach is a national level Cybersecurity Hackathon hosted by AICTE. My team was qualified for the 'Grand-Finale' of the Hackathon",
    url: "",
  },
  {
    id: 6,
    title: "Cyber-Thon, 2023",
    desc: "Cyber-Thon is a Hackathon hosted by Chandigarh Police department. My team was qualified for the 'Grand-Finale' of the Hackathon",
    url: "",
  },
];

export default Projects;
