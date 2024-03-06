import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Switch, List, ListItem, IconButton, Badge, Box, Drawer, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from "../reduxToolkit/slices/userSlice"
import { Link, NavLink } from "react-router-dom";
import { AppState } from "../reduxToolkit/store";



interface Props{
    darkMode: boolean;
    handleThemeChange: () => void,
}

const midLinks = [
    {title: "products", path: "/products"},
    {title: "categories", path: "/categories"},
]


const navStyles = {
    color:"inherit", 
    textDecoration: "none",
    typography: "h6",
    "&:hover": { color: "darkGrey" },
    "&.active": { color: "text.secondary" }
}

const Header = ({darkMode, handleThemeChange}: Props) => {

    const dispatch = useDispatch();
    const userData = useSelector((state: AppState) => state.users.user)

    const totalQuantity = useSelector((state: AppState) => state.cart.totalQuantity);


    const handleLogout = ( ) => {
        dispatch(logoutUser()); // Dispatch the logout action
    };
   
 
    return ( 
    <>
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>


                <Box display="flex" alignItems="center">
                    <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
                        E-Commerce
                    </Typography>
                    <Switch  checked={darkMode} onChange={handleThemeChange} />
                </Box>
                
                <Box>
                    <List sx={{display: "flex"}}>
                        {midLinks.map( ({title, path}) => (
                            <ListItem 
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}>

                                    {title.toUpperCase()}

                            </ListItem>
                        ))}
                            { userData?.role === "admin" && (
                                <ListItem  
                                    component={NavLink}
                                    to="admin"
                                    key="admin"
                                    sx={navStyles}>
                                        {"admin".toUpperCase()}
                                </ListItem>
                            )
                           
                            }

                            { (userData?.role === "customer" || userData?.role ==="admin") && (
                                <ListItem 
                                    component={NavLink}
                                    to="profile"
                                    key="profile"
                                    sx={navStyles}>
                                        {"profile".toUpperCase()}
                                </ListItem>)
                            }

                    </List>
                </Box>

                <Box display="flex" alignItems="center">
                     <IconButton size="large" sx={{color: "inherit"}} component={Link} to={"/cart"}>
                          <Badge badgeContent={totalQuantity} color="secondary">
                              <ShoppingCart/>
                          </Badge>
                     </IconButton>  
                   
                    <List sx={{display: "flex" }}>
                        { userData ?  <h4>Hello, {userData.name}</h4>: (
                                <ListItem 
                                    component={NavLink}
                                    to="login"
                                    key="login"
                                    sx={navStyles}>
                                        {"login".toUpperCase()}
                                </ListItem>
                            )}

                            { userData ? <Button variant="text" onClick={handleLogout} sx={{color: "white", marginLeft: "10px"}}>
                            LOGOUT
                        </Button>:(
                                <ListItem 
                                    component={NavLink}
                                    to="register"
                                    key="register"
                                    sx={navStyles}>
                                        {"register".toUpperCase()}
                                </ListItem>)}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    </> 
    );
}
 
export default Header;
