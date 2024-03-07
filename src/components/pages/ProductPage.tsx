import { ProductType } from "../../misc/type"
import { baseUrl } from "../../data/data";
import useFetch from "../../hook/useFetch";
import ProductList from "../categories/products/productList/ProductList";
import { Container } from "@mui/material";

export default function ProductPage() {


  const { data, setData, loading, error } = useFetch<ProductType[]>(baseUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  // ...
  const addProduct = () => {
  setData((prevData) => [
    ...(prevData!), // non-null assertion
    {
      id: (prevData!.length || 0) + 101,
      title: "product",
      price: 100,
      description: "some description",
      category: "some category",
      image: "https://picsum.photos/200",
      rating: {
        rate: 101,
        count: 101,
      },
    },
  ]);
};

  return (
   
    <Container>
      <ProductList products={data} addProduct={addProduct}/>
    </Container>
   
  )
}
