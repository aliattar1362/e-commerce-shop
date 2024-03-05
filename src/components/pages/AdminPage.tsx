import { useState } from "react";
import ProductPage from "./ProductsPage";
import { Login } from "../categories/user/Login";
import { useSelector } from "react-redux";
import { AppState } from "../../reduxToolkit/store";
import UserProfile from "../categories/user/UserProfile";
import { CategoriesPage } from "./CategoriesPage";


export const AdminPage = () => {
     
  

    const accessToken = useSelector((state: AppState) => state.users.tokens?.access_token);

    // const [refresh_token, setRefresh_token] = useState(localStorage.getItem("refresh_token") ?? 
    //   null);


  return (
    <>
       {accessToken? <ProductPage/> : <CategoriesPage/>}
    </>
  )
}
