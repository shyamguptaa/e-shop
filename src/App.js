import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import About from "./pages/About";
import CheckOut from "./pages/CheckOut";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/product" element={<Products />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/checkout" element={<CheckOut />} />
            <Route exact path="/product/*" element={<PageNotFound />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
