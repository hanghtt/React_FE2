import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Admin from "./Layout/Admin";
import Client from "./Layout/Client";
import CategoryProduct from "./pages/Admin/category/CategoryAdd";
import CategoryEdit from "./pages/Admin/category/CategoryEdit";
import ListCategory from "./pages/Admin/category/ListCategory";
import ProductAdd from "./pages/Admin/Product-Add/ProductAdd";
import ProductEdit from "./pages/Admin/Product-Edit/ProductEdit";
import ProductList from "./pages/Admin/Product-List/ProductList";
import Detail from "./pages/Client/Detail";
import Search from "./pages/Client/Search";
import Category from "./pages/Client/Category";
import Shop from "./pages/Client/ShopList/Shop";
import Home from "./pages/Client/HomePage/Home";
import CartPage from "./pages/Client/Cart";
import Checkout from "./pages/Client/Checkout";
import Login from "./pages/Client/Login/Login";
import Register from "./pages/Client/Register/Register";
import PrivateRouter from "./PrivateRouter";
import CartContext from "./hook/CartContext/CartContext";

const App = () => {
  return (
    <>
      <CartContext>
        <Routes>
          <Route element={<Client />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notaccess" element={<Register />} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRouter>
                <Admin />
              </PrivateRouter>
            }
          >
            <Route path="products/list" element={<ProductList />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/edit/:id" element={<ProductEdit />} />

            <Route path="listCategory" element={<ListCategory />} />
            <Route path="categorys/add" element={<CategoryProduct />} />
            <Route path="categorys/edit/:id" element={<CategoryEdit />} />
          </Route>
        </Routes>
      </CartContext>

      <ToastContainer />
    </>
  );
};
export default App;
