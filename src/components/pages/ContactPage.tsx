import { Container, Typography } from "@mui/material";
import { useFetchAllProductsQuery, useDeleteProductMutation } from "../../reduxToolkit/productQuery";
import { useState } from "react";

const ContactPage = () => {
  const { data, error, isLoading } = useFetchAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [number, setNumber] = useState(0);


  console.log("query: ", data);


  return (
    <Container>
      <Typography variant="h2">Contact Page</Typography>
    </Container>
  );
};

export default ContactPage;
