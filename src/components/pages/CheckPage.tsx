import { useState } from "react";
import ProductPage from "./ProductsPage";
import { Login } from "../categories/user/Login";


export const CheckPage = () => {
      const [token, setToken] = useState(localStorage.getItem("userToken") ?? 
      null);




  return (
    <>
        {token? <ProductPage/> : <Login token={token} setToken={setToken}/>}
    </>
  )
}
