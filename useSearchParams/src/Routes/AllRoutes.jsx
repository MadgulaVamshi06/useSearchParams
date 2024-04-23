// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Details from "../Pages/Details";

function AllRoutes() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/*" element={<> You are Lost </>} />
        </Routes>  
  );
}

export default AllRoutes;
