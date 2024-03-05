import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import { Link } from "react-router-dom"

interface Props {
    category: string
}

export const CategoryCart = ({category} : Props) => {
  return (
    <>
        <Link to={`category/`}>
            <Card >
           <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           Hello
          </Avatar>
        }/>
      
         <CardMedia
        sx={{ height: 140 , backgroundSize: "contain"}}
        image=""
        title="green iguana"/>
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          €price
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height: "150px", overflow: "auto"}}>
                   
        </Typography>
      </CardContent>
      <CardActions >

        <Button size="small" component={Link} to={"/cart"} >Add to cart</Button>
        <Button size="small" component={Link} to={`/products/`}>View</Button>
   
      </CardActions>
      </Card>
        </Link>
    </>
  )
}
