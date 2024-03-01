import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductsPage";
import HomePage from "../pages/HomePage";
import ProductDetails from "../pages/products/productDetails/ProductDetails";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ShoppingCartPage from "../pages/ShoppingCardPage";


function App() {

// Theme Styles
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
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
