import { Container, Typography } from "@mui/material";
import { AppState } from "../../reduxToolkit/store";
import { useSelector } from "react-redux";
import ProductPage from "./ProductsPage";
import { CategoryCart } from "../categories/CategoryCart";

const AdminPage = () => {


    const accessToken = useSelector((state: AppState) => state.users.tokens?.access_token);


    return ( 
        <Container>
            <Typography variant="h2">Admin Page</Typography>
             {accessToken? <ProductPage/> : <CategoryCart category={""}/>}
        </Container>
        
   
    );
}
 
export default AdminPage;
