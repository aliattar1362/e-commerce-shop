import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, TextField, MenuItem, Typography, Card, CardContent, Grid, Container, Avatar, Button, CardActions, CardHeader, CardMedia} from '@mui/material';
import '../styles/Carousel.css'; // Import your CSS file for styling
import { useState } from 'react';
import { useFetchAllProductsQuery } from '../reduxToolkit/productQuery';
import { ProductType } from '../misc/type';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { addItem } from '../reduxToolkit/slices/cartSlice';
import { Link } from "react-router-dom";


const categories = [
  {
    value: 'electronics',
    label: 'electronics',
  },
  {
    value: 'jewelery',
    label: 'jewelery',
  },
  {
    value: "men's clothing",
    label: "men's clothing",
  },
  {
    value: "women's clothing",
    label: "women's clothing",
  },
];

export const Carousel = () => {
  const dispatch = useDispatch()

    const addToCart = (product: ProductType) => {
    // dispatch an addItem action
    dispatch(addItem(product))
  }
  
  const { data: productsList, error, isLoading } = useFetchAllProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState("jewelery");
  const [sortBy, setSortBy] = useState("");

   if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error loading products.</Typography>;
  }

  let filteredProducts = selectedCategory
    ? productsList?.filter((product) => product.category === selectedCategory)
    : productsList;

  // Sorting logic
  if (sortBy === "priceHighToLow") {
    filteredProducts = filteredProducts?.slice().sort((a, b) => b.price - a.price);
  } else if (sortBy === "priceLowToHigh") {
    filteredProducts = filteredProducts?.slice().sort((a, b) => a.price - b.price);
  }
    
  console.log(filteredProducts?.map(p => p.image))

  return (
    <div className='carousel'>
     {/* <img src="/img/hero.webp" alt="an avatar" /> */}

    <div className="top-section">
      <Container  className='container'>
  <TextField
    id="outlined-select-category"
    select
    label="Select Category"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    helperText="Please select the product category"
  
  >
    {categories.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}

  </TextField>
  
  <TextField
          id="outlined-select-sort"
          select
          label="Sort by Price"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          helperText="Please select the sorting option"
          sx={{ml: 2}}
        >
          <MenuItem value="priceHighToLow">Price High to Low</MenuItem>
          <MenuItem value="priceLowToHigh">Price Low to High</MenuItem>
  </TextField>
</Container>
    </div>

     <div className="down-section">
       <div className="centeredContainer">
        <Box
          component="form"
          noValidate 
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          autoComplete="off"
        >
          <Grid container spacing={2}>
            {filteredProducts?.map((product: ProductType) => (
              <Grid item xs={12} sm={4} key={product.id}>
                <Card className='card'>
                  <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {product.title[0]}
                    </Avatar>
                  }
                />
                <CardMedia
                  sx={{ margin: "10px", backgroundSize: "contain"}}
                  image={product.image}
                  title="green iguana"
                />

                  <CardContent>
                  <Typography gutterBottom color="secondary" variant="h5">
                    €{product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{height: "150px", overflow: "auto"}}>
                              {product.category}/{product.description}
                  </Typography>
                </CardContent>

                <CardActions >

                  <Button size="small" component={Link} to={"/cart"} onClick={() => addToCart(product)}>Add to cart</Button>
                  <Button size="small" component={Link} to={`/products/${product.id}`}>View</Button>
            
                </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
     </div>
    </div>

    
  );
};
