import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import ToolPage from "./pages/ToolPage";
import { Link, Route, Routes } from "react-router-dom";
import tools from './Data/ToolsDetails.js'
import React from "react";
import HeroExplorer from "./components/HeroExplorer";
import AllTools from "./pages/AllTools.jsx";
import { AiFillHome } from "react-icons/ai";


const Navbar = () => (
  <nav className="navBar shadow-xl p-4 flex justify-between items-center z-30">
    <div className="logo text-xl text-gray-800 font-bold">
      <a href="/" className="cursor-pointer">ANY-2️⃣-ANY</a>
    </div>
    <div className="space-x-4 flex gap-7 text-xl text-gray-700 items-center">
      <Link to="/" className='text-2xl px-4 py-2 border rounded flex items-center gap-1'>
        <AiFillHome className=' text-gray-700' />
        <p>Home</p>
      </Link>
      <div className="hidden lg:flex gap-6 sm:hidden md:hidden items-center">
        <Link to="/alltools" className="hover:underline">Merge PDF</Link>
        <Link to="/alltools" className="hover:underline">Split PDF</Link>
        <Link to="/alltools" className="hover:underline">Compress PDF</Link>
        <Link to="/alltools" className="hover:underline">Convert PDF</Link>
        <Link to="/alltools" className="hover:underline">All Tools</Link>
      </div>
    </div>
  </nav>
);

const ToolGrid = () => (
  <div className="px-20 sm:px-48 flex flex-col gap-10">
    <div className="text-center">
      <h1 className="text-3xl text-gray-700">Most Used Tools</h1>
    </div>

    <div id="Alltools" className="bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-6">
      {tools.map((tool, index) => (
        <Link
          key={index}
          to={`/tool/${tool.title.toLowerCase().replace(/\s/g, "-")}`}
          className={` flex justify-between p-4 bg-box shadow-lg rounded-xl cursor-pointer h-[20vh] text-gray-700`}>
          <img src={tool.icon} alt="icon" className="w-18 sm:w-[3vw] sm:h-[3vw]" />
          <div className="flex flex-col justify-around">
            <h3 className="font-normal text-3xl">{tool.title}</h3>
            <p className="text-md hidden sm:flex sub-heading">{tool.description}</p>
          </div>
          <div className="text-4xl flex items-center lg:pl-12">{'>'}</div>
        </Link>
      ))}
    </div>
    <div className="flex justify-center">
      <Link to="/alltools">
        <button class="rounded-md bg-indigo-600 px-3 py-2 text-xl normal font-bold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">See All PDF Tools</button>
      </Link>
    </div>
  </div>
);

const HeroSection = () => (
  <div className="p-12 flex flex-col items-center justify-center">
    <h1 className=" text-5xl text-center sm:flex sm:justify-center sm:gap-2 md:gap-2 "><span className="stroke text-green-500">Convert your</span> <span className="text-gray-700">file easily</span></h1>
    <p className="text-xl text-gray-600 px-12 mt-2 flex flex-col items-center text-center md:text-center">
      <span>Every tool you need to work with PDFs in one place, Every tool you need to use PDFs, at your fingertips. </span>
      <span>All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</span>
    </p>
  </div>
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ToolGrid />
            <WhyChoose />
          </>
        } />
        <Route path="/tool/:toolName" element={<ToolPage />} />
        <Route path="/alltools" element={<AllTools />} />
      </Routes>
      <Footer />
    </div>
  );
}
