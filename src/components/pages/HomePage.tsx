

import { FooterSection } from "../footer/FooterSection";
import "../../styles/homeStyles.css"

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const HomePage = ({ darkMode, handleThemeChange }: Props) => {

  return (
    <div style={{ margin: "0" }}>
      <div className="img">
    
      </div>
      <FooterSection darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
