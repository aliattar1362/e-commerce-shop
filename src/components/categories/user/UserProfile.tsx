// import { useSelector } from "react-redux"
// import { AppState } from "../../../reduxToolkit/store"
// import axios from "axios";
// import { useState } from "react";
// import { Box, Typography, TextField, Button } from "@mui/material";

// export default function UserProfile() {
//       const [userForm, setUserForm] = useState();

//     // form user enter email and password
//     // send postMessage, https://api.escuelajs.co/api/v1/auth/login
//     // body:

//     // get user data
//     const user = useSelector((state: AppState) => state.users.user);

//     if ( !user ) {
//         return <div>no user</div>
//     }

//   // send token with axios
//   //token from  local storage
//   // const token = localStorage.getItem("token");

//   // // send token with fetch
//   // fetch("https://api.escuelajs.co/api/v1/auth/profile", {
//   //   method: "POST",
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //     "Content-Type": "application/json",
//   //   },
//   // });

//   // // send token with axios
//   axios.post("https://api.escuelajs.co/api/v1/auth/profile", userForm, {
//     headers: {
//       Authorization: "Bearer {your access token}",
//     },
//   });


//   return (
//     <div>
//         <Typography variant="h2">
//           UserProfile
//         </Typography>
//          <Box className="containerStyle">
//           <form>
//             <Typography variant="h5" sx={{marginBottom: "20px"}}>
//               Log In
//             </Typography>
//             <div>
//               <TextField
//                 id="username"
//                 label="Name"
//                 variant="outlined"
//                 value={user.name}
//                 name="username"
//                 sx={{ mb: 2 }}
//               />
//             </div>

//             <div>
//               <TextField
//                 type="password"
//                 id="password"
//                 label="password"
//                 variant="outlined"
//                 value={user.password}
//                 name="password"
//                 sx={{ mb: 2 }}
//               />
//             </div>

//             <div>
//               <Button variant="contained" color="primary" >
//                 Log In
//               </Button>
//             </div>
//           </form>
//     </Box>
//     </div>
//   )
// }

import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../reduxToolkit/store";
import axios from "axios";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { saveUserData, saveTokens } from "../../../reduxToolkit/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        loginData
      );

      const { access_token, refresh_token } = response.data;

      // Save user data and tokens to Redux store
      dispatch(saveUserData(response.data));
      dispatch(saveTokens({ access_token, refresh_token }));

      // Save tokens to local storage (for demonstration purposes)
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      // Navigate to profile page
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, show error message, etc.
    }
  };

  const getProfile = async () => {
    try {
      // Get user data with the access token
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      // Update user data in Redux store
      dispatch(saveUserData(response.data));
    } catch (error) {
      console.error("Profile retrieval failed:", error);
      // Handle profile retrieval failure, show error message, etc.
    }
  };

  return (
    <div>
      <Typography variant="h2">UserProfile</Typography>
      <Box className="containerStyle">
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              sx={{ mb: 2 }}
            />
          </div>

          <div>
            <TextField
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              sx={{ mb: 2 }}
            />
          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">
              Log In
            </Button>
          </div>
        </form>

        {/* Button to retrieve profile */}
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={getProfile}
            sx={{ mt: 2 }}
          >
            Get Profile
          </Button>
        </div>
      </Box>
    </div>
  );
}
