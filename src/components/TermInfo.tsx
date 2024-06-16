import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.magickite.tech</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
