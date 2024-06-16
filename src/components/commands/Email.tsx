import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");


  const handleClick = () => {
    window.open("mailto:jsanjiv2003@gmail.com", "_self");
  };

  return (
    <Wrapper>
      <span onClick={handleClick}>jsanjiv2003@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
