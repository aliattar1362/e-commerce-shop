
import { ProductType } from "../../../../misc/type";
import ProductCard from "../productCard/ProductCard";
import { Button, Grid } from "@mui/material";

interface Props {
  products: ProductType[];
  addProduct: () => void;
}

export default function ProductList({ products, addProduct}: Props) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={3}>
          <ProductCard product={product}/>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button onClick={addProduct} variant="contained" sx={{margin: "40px 0"}}>Add Product</Button>
      </Grid>
    </Grid>
  );
}
