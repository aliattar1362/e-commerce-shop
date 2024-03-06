import { Container, Typography } from "@mui/material";
import { useFetchAllProductsQuery} from "../../reduxToolkit/productQuery";

const UserProfilePage = () => {
  const { data, isLoading } = useFetchAllProductsQuery();
  // const [deleteProduct] = useDeleteProductMutation();



  console.log("query: ", data);

  if (isLoading) return <h1>Loading...</h1>


  return (
    <Container>
      <Typography variant="h2">User Profile Page</Typography>
    </Container>
  );
};

export default UserProfilePage;
