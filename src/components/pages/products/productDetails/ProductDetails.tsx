import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../data/data";
import useFetch from "../../../hook/useFetch";
import { Product } from "../../../misc/type";

const ProductDetails = () => {
     const {id} = useParams<{id: string}>();

     const { data, loading, error } = useFetch<Product>(`${baseUrl}/${id}`);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>{error}</p>;
    }

    console.log(data)
    
    return ( 
         <>
          <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={data.image} alt={data.title} style={{width: "100%"}}></img>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h3">{data.title}</Typography>
                <Divider sx={{mb: 2}}/>
                 <Typography variant="h4" color="secondary">{"€"+data.price}</Typography>
                 <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{data.title}</TableCell>
                            </TableRow>

                             <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{data.description}</TableCell>
                            </TableRow>

                             <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{data.category}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Rate</TableCell>
                                <TableCell>{data.rating.rate}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{data.rating.count}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                 </TableContainer>
            </Grid>
          </Grid>
        </> 
    );
}
 
export default ProductDetails;