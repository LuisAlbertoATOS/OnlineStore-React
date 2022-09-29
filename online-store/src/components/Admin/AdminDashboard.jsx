import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminDashboard = () => {
  return (
    <section className="h-96">
      <AdminNavbar />
      <div className="h-full text-2xl">
        <p className="py-5 font-medium leading-tight text-5xl">Welcome!</p>
        <section className="flex flex-row flex-wrap sm:flex-nowrap justify-center mx-10 pb-5 h-2/3 sm:h-full ">
          <Link to="products" className="hover:shadow-xl text-5xl text-white font-bold grid place-content-center bg-cover bg-[url('https://th.bing.com/th/id/OIP.LOlodvJfWh7HFVf2iYiWMwHaHc?pid=ImgDet&rs=1')] h-full w-96 sm:w-1/2 mx-5 py-5 mb-5">
            <div className="hover:underline decoration-4 px-5 py-5 bg-white text-black">Products</div>
          </Link>
          <Link to="sales" className="hover:shadow-xl text-5xl text-white font-bold grid place-content-center bg-cover bg-[url('https://www.salestechstar.com/wp-content/uploads/2019/07/How-to-Grow-Business-with-Steady-Sales-Flow-guest-post.jpg')] h-full w-96 sm:w-1/2 mx-5 py-5 mb-5">
            <div className="hover:underline decoration-4 px-5 py-5 bg-white text-black">Sales</div>
          </Link>
        </section>
      </div>
    </section>
  );
};

export default AdminDashboard;
