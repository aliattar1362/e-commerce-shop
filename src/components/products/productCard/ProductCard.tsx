import { Avatar,  Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../misc/type";


interface Props {
    product: Product;
}

const ProdcutCard = ({product} : Props) => {
    return (
        <>
           <Card >
                <CardHeader 
                    avatar={
                        <Avatar sx={{bgcolor: "secondary.main"}}>
                            {product.title.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title = {product.title}
                    titleTypographyProps={{
                        sx: {fontWeight: "bold", color:"secondary.main"}
                    }}
                />
                <CardMedia
                    sx={{ height: 140, backgroundSize: "contain"}}
                    image={product.image}
                    title={product.title}
                />
                <CardContent >
                    <Typography gutterBottom color="secondary" variant="h5" >
                    €{product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{height: "150px", overflow: "auto"}}>
                    {product.category}/{product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button size="small">View</Button>
                </CardActions>
            </Card>
        </>
      );
}
 
export default ProdcutCard;