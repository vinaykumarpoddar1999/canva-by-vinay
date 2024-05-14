import React from "react";
import canvalogo from "../../public/canva-logo.svg";

const Index = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <header>
        <div className="bg-[#252627] shadow-md">
          <div className="w-[93%] m-auto py-3">
            <div className="flex justify-between items-center">
              <div className="w-[80px] h-[48px]">
                <img
                  className="w-full h-full"
                  src={canvalogo}
                  alt="canva-logo"
                />
              </div>
              <div className="flex gap-4">
                <button className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium">
                  Sign In
                </button>
                <button className="py-2 w-[80px] text-center bg-[#8b3dff] text-white transition-all hover:[#955378] rounded-[5px] font-medium">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full h-full justify-center items-center p-4">
        <div className="py-[168px] flex justify-center items-center flex-col gap-6">
          <h2 className="text-[#c7c5c5] text-5xl font-bold">
            What will you design today?
          </h2>
          <span className="text-[#aca9a9] text-2xl font-medium">
            Canva will make it easy to create and share professionals designs.
          </span>
          <button className="py-2 w-[200px] text-center bg-[#8b3dff] text-white transition-all hover:[#955378] rounded-[5px] font-medium">
            Sign Up For Free
          </button>
        </div>
      </div>
      <footer class="bg-[#8b3dff] text-white py-6 px-5">
        <div class="container mx-auto flex justify-between items-center">
          <p class="text-medium font-bold">© 2024 A Canva Clone By Vinay Poddar</p>
          <a
            href="https://in.linkedin.com/in/vinay-kumar-poddar"
            target="_blank"
            rel="noopener"
            class="flex items-center"
          >
            {/* <img
              src="linkedin-icon.svg"
              alt="LinkedIn Profile"
              class="w-6 h-6 mr-2"
            /> */}
            <span class="text-medium font-bold ">LinkedIn Profile</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
