import { Container, Typography } from "@mui/material";
import { useFetchAllProductsQuery, useDeleteProductMutation } from "../../reduxToolkit/productQuery";
import { useState } from "react";

const ContactPage = () => {
  const { data, isLoading } = useFetchAllProductsQuery();
  // const [deleteProduct] = useDeleteProductMutation();



  console.log("query: ", data);

  if (isLoading) return <h1>Loading...</h1>


  return (
    <Container>
      <Typography variant="h2">Contact Page</Typography>
    </Container>
  );
};

export default ContactPage;
