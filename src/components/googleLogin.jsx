import axios from 'axios';
import React, { useContext } from 'react'
import MainContext from '../context/context';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin} from "@react-oauth/google"
import { jwtDecode } from 'jwt-decode';

const GOOGLE_CLIENT_ID = "819399806132-u1mlq18p3gosbg71b3nrkh83i7bnnfg9.apps.googleusercontent.com";

const GoogleLoginButton = () => {

    const {setAuthTokens, setUser,api} = useContext(MainContext)
    const navigate = useNavigate()
    const handleGoogleLogin = async (response) => {
        const token = response.credential; // The token provided by Google
        if (!token){
          console.error('No token Found!')
          return;
        }
        try {
          const res = await axios.post(`${api}/auth/google/`, {
            token,
          });
    
          if (res.data.is_new_user) {
            alert("Welcome! You have successfully signed up.");
          } else {
            alert("Welcome back! You have successfully signed in.");
          }
    
          const tokens = {
            access:res.data.access,
            refresh: res.data.refresh
          }
          localStorage.setItem("authTokens", JSON.stringify(tokens));
          
          setAuthTokens(tokens);
          setUser(jwtDecode(res.data.access));
          navigate("/home");
        } catch (error) {
          console.error("Google login failed", error);
        }
      };
    
      // Google login failure handler
      const handleGoogleFailure = (response) => {
        console.error("Google login failed:", response);
      };
    
  return (
    <div className="mt-8 w-3/4">
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={handleGoogleLogin}
      onFailure={handleGoogleFailure}
      cookiePolicy={"single_host_origin"}
      className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition bg-white"
    />
  </div>
  )
}

export default GoogleLoginButton