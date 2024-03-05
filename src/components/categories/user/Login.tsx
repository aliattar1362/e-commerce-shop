import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { userApiUrl } from "../../../data/data";
import axios from "axios";

interface Props {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Login = ({token, setToken} : Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>("");


  const loginHandler = () => {
    setUsername("");
    setPassword("");
    setError("");

    axios ({
        url:userApiUrl,
        method: "POST",
        data: {
            username,
            password
        }
    }).then(response => {
        console.log(response.data.token)
        setToken(response.data.token)
        localStorage.setItem("userToken", response.data.token);
    }).catch(err => {
        console.log(err.response)
        setError(err.response)
    })
  }


  return (
    <>

         <Box className="containerStyle">
          <form>
           <Typography variant="h5" sx={{marginBottom: "20px"}}>
             Log In
           </Typography>
           <div>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                sx={{ mb: 2 }}
              />
              
            </div>

            <div>
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                sx={{ mb: 2 }}
              />
            </div>

            <div>
               
               {/* {error && <p>{error.response.data}</p>} */}

                  {error && typeof error === "object" && error.response && error.response.data && (
              <p>{error.response.data}</p>
            )}

              <Button variant="contained" color="primary" onClick={loginHandler}>
                Log In
              </Button>
            </div>
          </form>
    </Box>
   
    </>
   
  )
}
