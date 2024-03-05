import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductType } from "../../misc/type";


const AboutPage = () => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState<ProductType[]>([])


    return ( 
        <Container>
            <Typography variant="h2">AboutPage</Typography>
        </Container>
        
   
    );
}
 
export default AboutPage;