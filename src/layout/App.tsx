import { useState } from "react";
import Header from "./Header";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ProductPage from "../components/pages/ProductsPage";
import HomePage from "../components/pages/HomePage";
import ProductDetails from "../components/categories/products/productDetails/ProductDetails";
import UserProfilePage from "../components/pages/UserProfilePage";
import AdminPage from "../components/pages/AdminPage";
import ShoppingCartPage from "../components/pages/ShoppingCardPage";
import { CategoriesPage } from "../components/pages/CategoriesPage";
import UserRegister from "../components/categories/user/UserRegister";
import UserProfile from "../components/categories/user/UserProfile";
import { useDispatch } from "react-redux";
import { loadLocalStorage } from "../reduxToolkit/slices/userSlice";

function App() {

   const dispatch = useDispatch();
   // 
   dispatch(loadLocalStorage());
   
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
        
          <Routes>
            <Route path="/" element={<HomePage darkMode = {darkMode} handleThemeChange={handleThemeChange}/>}  />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/categories" element={<CategoriesPage/>} />
            <Route path="/contact" element={<UserProfilePage/>} />
            <Route path="/about" element={<AdminPage/>} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            {/* <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<LoginPage />} /> */}
            <Route path="/register" element={<UserRegister />}/>
            <Route path="/login" element={<UserProfile  />}/>
            <Route path="/profile" element={<UserProfilePage />}/>
          </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
