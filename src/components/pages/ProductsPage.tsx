import { baseUrl } from "../data/data";
import useFetch from "../hook/useFetch";
import { Product } from "../misc/type";
import ProductList from "../products/productList/ProductList";

const ProductsPage = () => {
     const { data, loading, error } = useFetch<Product[]>(baseUrl);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || data === null) {
    return <p>{error || 'Error loading data'}</p>;
  }

    return ( 
        <>
            <ProductList products={data} />
        </>
     );
}
 
export default ProductsPage;