import SignInPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/error";
import Home from "./pages/userSide/home";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID =
  "819399806132-u1mlq18p3gosbg71b3nrkh83i7bnnfg9.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Router>
      <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
        </GoogleOAuthProvider>
  );
}

export default App;
