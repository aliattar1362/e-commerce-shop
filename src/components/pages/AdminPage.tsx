
import { useSelector } from "react-redux";
import { AppState } from "../../reduxToolkit/store";
import { Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { useFetchAllProductsQuery, useDeleteProductMutation } from "../../reduxToolkit/productQuery";
import { Delete } from "@mui/icons-material";

export const AdminPage = () => {
  const userData = useSelector((state: AppState) => state.users.user);
  const { data: productsList, error, isLoading } = useFetchAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation(); // Destructure the mutation function

  const handleDeleteProduct = async (productId: number) => {
      };
  
  if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error loading products.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h3" sx={{ color: "green" }}>Welcome {userData?.name}! This is the list of whole products!</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productsList?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>
                  <img src={product.image} alt="Product" style={{ height: 140, backgroundSize: "contain" }} />
                </TableCell>
                <TableCell>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
