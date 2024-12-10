import "./App.css";
import Example from "./Customer/Components/Navigation/Navigation.jsx";
import HomePage from "./Customer/Pages/HomePage/HomePage.jsx";
import Footer from "./Customer/Components/Footer/Footer.jsx";
import Product from "./Customer/Components/Products/Product.jsx";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails.jsx";
import Cart from "./Customer/Components/Cart/Cart.jsx";
import Checkout from "./Customer/Components/Checkout/Checkout.jsx";
function App() {
  return (
    <div className="">
      <Example />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
