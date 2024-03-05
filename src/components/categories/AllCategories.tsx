import { Container, Typography, Grid, Paper  } from "@mui/material"
import { CategoryCart } from "./CategoryCart"

export const AllCategories = () => {
  return (
   <>
        
    <Typography variant="h3"> </Typography>
     
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{marginLeft: "50px"}}> 
            Browse Category
          <CategoryCart category= {"Men's Clothes"}/>
        </Paper>
      </Grid>
    </Grid>
   </>
  )
}
