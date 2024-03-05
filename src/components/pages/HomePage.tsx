import { Container, Typography } from "@mui/material";
import { FooterSection } from "../footer/FooterSection";
import { Carousel } from "../../layout/Carousel ";
import { AllCategories } from "../categories/AllCategories";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const HomePage = ({ darkMode, handleThemeChange }: Props) => {
    return ( 
        <div style={{margin: "0"}}>
            <Carousel/>
            <AllCategories/>
            <FooterSection darkMode = {darkMode} handleThemeChange={handleThemeChange}/>
        </div> 
    );
}
 
export default HomePage;