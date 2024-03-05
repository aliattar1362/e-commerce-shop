import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reduxToolkit/store";
import { ProductType } from "../../misc/type";
import { addItem, removeItem, deleteItem } from "../../reduxToolkit/slices/cartSlice";




export default function ShoppingCartPage() {
  const dispatch = useDispatch()

  const addToCart = (product: ProductType) => {
    // dispatch an addItem action
    dispatch(addItem(product))
  }

  const removeFromCart = (product: ProductType) => {
    // dispatch an addItem action
    dispatch(removeItem(product))
  }


  const deleteFromCart = (product: ProductType) => {
    // dispatch an addItem action
      dispatch(deleteItem(product))
  }


  const cartProducts = useSelector((state: AppState) => state.cart.cart);

  const totalAmount = cartProducts.reduce((acc, item) => acc + (item.price * ((item.rating.initialCount ?? 0) - (item.rating.count))), 0).toFixed(2);


  return (
    <>
      <Typography
  variant="h3"
  sx={{
    mb: "30px",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    color: "#072a40", // #31383f, #2f3020, #013328
    textAlign: "center", // Align the text to the center
    fontWeight: "bold", // Add bold font weight
    textTransform: "uppercase", // Convert text to uppercase
    letterSpacing: "1px", // Add letter spacing
    borderBottom: "3px solid #072a40", // Add a bottom border
    paddingBottom: "10px", // Add some space between text and border
  }}
>
  Cart Items
</Typography>

      <div>
        {cartProducts.length === 0 && <div style={{textAlign: "center", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",  fontSize: "18px", color: "#f21137", margin: "20px 0",}}>Cart is empty</div>}
      </div>

         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            
            <TableCell>Product</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Price</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Quantity</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Subtotal</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Add</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Remove</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Delete</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.title}
              </TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>€{(item.price).toFixed(2)}</TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>{(item.rating.initialCount ?? 0) - (item.rating.count) }</TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>€{(item.price * ((item.rating.initialCount ?? 0) - (item.rating.count) )).toFixed(2)}</TableCell>

              <TableCell align="right" sx={{textAlign: "left"}}>
                <Button variant="outlined" color="success" onClick={() => addToCart(item)}>+</Button>
              </TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>
                <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item)}>-</Button>
              </TableCell>

              <TableCell align="right" sx={{textAlign: "left"}}>
                <IconButton color="error" onClick={() => deleteFromCart(item)}>
                  <Delete /> 
                </IconButton>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div className="sum">
      <span id="text">Total Amount:</span>
      <span id="value">€{totalAmount}</span>
    </div>

    <Button component={RouterLink} to="/products" variant="contained" sx={{mt: "50px"}}>
      Continue Shopping?
    </Button>
  
    </>
  )
}
