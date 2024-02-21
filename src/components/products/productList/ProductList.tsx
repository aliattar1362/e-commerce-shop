import { Grid } from "@mui/material";
import { Product } from "../../misc/type";
import ProdcutCard from "../productCard/ProductCard";

interface Props {
    products: Product[];
}

const ProductList = ({products}: Props ) => {
    return ( 
        <>
            <Grid container spacing={4}>
                {products.map((product) => { return (
                    <Grid item xs={3} key={product.id}>
                         <ProdcutCard product={product} />
                    </Grid>
                   
                )})}
            </Grid>

        </> 
    );
}
 
export default ProductList;
