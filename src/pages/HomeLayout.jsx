import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="my-align my-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
