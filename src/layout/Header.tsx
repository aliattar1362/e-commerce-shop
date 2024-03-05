import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Switch, List, ListItem, IconButton, Badge, Box, Drawer } from "@mui/material";
import { useSelector } from "react-redux";

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

const rightLinks = [
    {title: "login", path: "/login"},
    {title: "register", path: "/register"},
]


const navStyles = {
    color:"inherit", 
    textDecoration: "none",
    typography: "h6",
    "&:hover": { color: "darkGrey" },
    "&.active": { color: "text.secondary" }
}

const Header = ({darkMode, handleThemeChange}: Props) => {

    const userData = useSelector((state: AppState) => state.users.user)

    const totalQuantity = useSelector((state: AppState) => state.cart.totalQuantity);
   
 
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
                                    to="contact"
                                    key="contact"
                                    sx={navStyles}>
                                        {"contact".toUpperCase()}
                                </ListItem>
                            )
                           
                            }

                            { (userData?.role === "customer" || userData?.role ==="admin") && (
                                <ListItem 
                                    component={NavLink}
                                    to="about"
                                    key="about"
                                    sx={navStyles}>
                                        {"about".toUpperCase()}
                                </ListItem>)
                            }

                    </List>
                </Box>

                <Box display="flex" alignItems="center">
                     {/* Shopping cart icon button */}
                     <IconButton size="large" sx={{color: "inherit"}} component={Link} to={"/cart"}>
                          <Badge badgeContent={totalQuantity} color="secondary">
                              <ShoppingCart/>
                          </Badge>
                     </IconButton>  
                   


                    <List sx={{display: "flex" }}>
                    {rightLinks.map( ({title, path}) => (
                        <ListItem 
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}>
                                {title.toUpperCase()}
                        </ListItem>
                    ))}
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    </> 
    );
}
 
export default Header;
export {}
