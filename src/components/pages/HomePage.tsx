

import { FooterSection } from "../footer/FooterSection";
import "../../styles/homeStyles.css"
import { Body } from "../body/Body";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const HomePage = ({ darkMode, handleThemeChange }: Props) => {

  return (
    <div style={{ margin: "0" }}>
      <Body/>
      <FooterSection darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
