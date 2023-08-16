import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Shope from "./pages/Shope";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Shope" element={<Shope/>}></Route>
    <Route path="/Product" element={<ProductDetails/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contacts/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/SignUP" element={<Signup/>}></Route>
    <Route path="/MyAccount" element={<MyAccount/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/Checkout" element={<Checkout/>}></Route>
    <Route path="/404" element={<NotFound/>}></Route>
  </Route>

))

  return (
    <>
    	<RouterProvider router={router}/>
    </>
  )
}

export default App
