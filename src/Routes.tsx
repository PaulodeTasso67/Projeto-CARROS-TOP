import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Catalog  from "./pages/Catalog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function BRoutes() {

    return (
        <BrowserRouter>
        <Navbar />
        <Routes>

         <Route path="/" element={<Home />} />
         <Route path="/products" element={<Catalog />} />
         
        </Routes>
        
        </BrowserRouter> 
    );
}

export default BRoutes;