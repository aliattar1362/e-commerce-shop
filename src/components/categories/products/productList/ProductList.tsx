// Internal features
import { ProductType } from "../../../../misc/type";
import ProductCard from "../productCard/ProductCard";
// Style
import { Grid } from "@mui/material";

interface Props {
  products: ProductType[];
}

export default function ProductList({ products}: Props) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={3}>
          <ProductCard product={product}/>
        </Grid>
      ))}
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}