import FooterComponents from "./components/Footer/FooterComponents";
import NavbarComponents from "./components/Navbar/NavbarComponents";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";

// animate css
import "animate.css";

const App = () => {
  return (
    <>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/order" Component={PlaceOrder} />
      </Routes>
      <FooterComponents />
    </>
  );
};

export default App;
