import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Cart from "../pages/Cart";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ProductDetailsPage from "../component/home/ProductDetailsPage";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Signup from "../pages/Singup";
export default function Index() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/*" element={<Error/>}/>
            <Route path="/product/:id" element={<ProductDetailsPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
