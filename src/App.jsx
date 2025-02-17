// 外部 node_modules 資源
import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { RouterProvider, createHashRouter } from "react-router-dom";

// 內部 src 資源
// import AdminLogin from "./pages/admin/AdminLogin";
// import AdminProducts from "./pages/admin/AdminProducts";
import Products from "./pages/front/Products";
import Navbar from "./components/Navbar";
// import Home from "./pages/front/Home";
// import About from "./pages/front/About";
// import { Home, About, NotFound } from "./pages/front";


import { element } from "prop-types";

import { Outlet } from "react-router-dom";
// import NotFound from "./pages/front/NotFound";

function App() {
  // 登入相關
  // const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      {/* {isAuth ? <AdminProducts /> : <AdminLogin setIsAuth={setIsAuth}/>} */}
      <Navbar />
      <div className="container mt-3">
        
        <Outlet />
      </div>
      <Products />
    </>
  );
}

export default App;
