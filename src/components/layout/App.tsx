import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetails from "../products/productDetails/ProductDetails";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProductsPage from "../pages/ProductsPage";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "dark"? "black":"lightGrey"
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode = {darkMode} handleThemeChange={handleThemeChange}/>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
