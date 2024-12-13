import SignInPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/error";
import Home from "./pages/userSide/home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./components/customers/layout";
import Menu from "./pages/userSide/menu";
import Dashboard from "./pages/restaurantSide/home";
import RestaurantLayout from "./components/restaurants/restaurantLayout";
import DeliveryDashboard from "./pages/deliverySide/home";
import PartnerShip from "./pages/userSide/partnership";
import RestaurantSignUpPage from "./pages/auth/restaurantSignup";
import Dishes from "./pages/restaurantSide/dishes";
import Orders from "./pages/restaurantSide/orders";
import Bag from "./pages/userSide/bag";
import AboutPage from "./pages/userSide/about";
import { Toaster } from "react-hot-toast";

const GOOGLE_CLIENT_ID =
  "819399806132-u1mlq18p3gosbg71b3nrkh83i7bnnfg9.apps.googleusercontent.com";


function App() {
  
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
      <Toaster position="top-center" reverseOrder={false} /> {/* Add Toaster here */}

        <Routes>

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/restaurantjoin" element={<RestaurantSignUpPage />} />

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/partner" element={<PartnerShip />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>


          <Route path="/restaurant" element={<RestaurantLayout />}>
            <Route path="/restaurant" element={<Dashboard />} />
            <Route path="/restaurant/dishes" element={<Dishes />} />
            <Route path="/restaurant/orders" element={<Orders />} />
          </Route>
          <Route path="/delivery" element={<DeliveryDashboard />} />
          
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
