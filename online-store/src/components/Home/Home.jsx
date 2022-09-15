import React from "react";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="italic font-semibold text-center text-2xl text-slate-100 bg-blue-600 m-5">
        Home
      </div>
      {/* <img
        alt="Logo"
        src="https://th.bing.com/th/id/R.99bfc1bdb46c7a576608edaa8be94640?rik=UX4A7YqNlXOCvQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_168863.png&ehk=hfHdC0hxEnNIMLGSqR2xBMsQexVonGeNhOrqq4tZVi8%3d&risl=&pid=ImgRaw&r=0"
      ></img> */}
    </div>
  );
};

export default Home;
