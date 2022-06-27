import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

// react router quick start tutorial: https://v5.reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products/" element={<ProductList/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" 
          element={user ? <Navigate to="/"/> : <Login/>}
        >  
        </Route>
      </Routes>
    </Router>
  )
};

export default App;