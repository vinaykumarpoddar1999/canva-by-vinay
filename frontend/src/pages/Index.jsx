import React from "react";
import { useState } from "react";
import canvalogo from "../../public/canva-logo.svg";
import { IoMdClose } from "react-icons/io";
const Index = () => {
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div
        className={`w-screen ${
          show ? "visible opacity-100" : "invisible opacity-30"
        } transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}
      >
        <div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
          <div
            onClick={() => setShow(false)}
            className="absolute right-4 top-4 text-xl cursor-pointer text-white"
          >
            <IoMdClose />
          </div>
          <h2 className="text-white pb-4 text-center text-2xl">
            Login or sign up
          </h2>
          {type === "signin" && (
            <form>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={state.email}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={state.password}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div>
                <button className="px-3 py-2 rounded-md bg-blue-500 w-full outline-none hover:bg-blue-600 text-white">
                  Sign In
                </button>
              </div>
            </form>
          )}
          {type === "signup" && (
            <form>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  value={state.name}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={state.email}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-3 mb-3 text-white">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={state.password}
                  className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                />
              </div>
              <div>
                <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
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
                <button
                  onClick={() => {
                    setType("signin");
                    setShow(true);
                  }}
                  className="py-2 w-[80px] text-center bg-blue-500 text-white transition-all hover:bg-blue-600 rounded-[5px] font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setType("signup");
                    setShow(true);
                  }}
                  className="py-2 w-[80px] text-center bg-[#8b3dff] text-white transition-all hover:[#955378] rounded-[5px] font-medium"
                >
                  Sign Up
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
          <p class="text-medium font-bold">
            © 2024 A Canva Clone By Vinay Poddar
          </p>
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
