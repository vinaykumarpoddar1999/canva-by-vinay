import React from "react";
import canvalogo from "../../public/canva-logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const saveImage = () =>{

  }

  const downloadImage = () =>{
    
  }
  return (
    <div className="h-[60px] w-full bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c]">
      <div className="flex justify-between px-10 items-center text-gray-300 h-full">
        <Link to="/">
          <img src={canvalogo} alt="canvalogo" />
        </Link>
        <span className="text-xl">Canva - By Vinay</span>
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            onClick={saveImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-md"
          >
            Save
          </button>
          <button
            onClick={downloadImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-md"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
