import { useState } from "react";
import { Link } from "react-router-dom";
import { Links, MainTitle, Menus } from "../assets";


export function Sidebar(){
  const [open, setOpen] = useState(true);
  return (
    <div>
      <aside
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-700 border-x border-gray-600  h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={MainTitle.arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           rounded-full bg-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={MainTitle.src}
            width={"20px"}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />

          <h1
            className={`text-white origin-left text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
          {MainTitle.title}
          </h1>
        </div>
        <nav className="pt-12">
            {Menus.map((Menu, index) => (
              <Link
                to={Menu.href}
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-cyan-400 transition-colors text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img width={20} src={Menu.src} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            ))}
            {Links.map((Link, index) => (
              <a
                download={Link.download}
                key={index}
                href={Link.href}
                target={Link.target}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-cyan-400 transition-colors text-sm items-center gap-x-4 
                ${Link.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img width={20} src={Link.src} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Link.title}
                </span>
              </a>
            ))}
        </nav>
      </aside>
    </div>
  );
};

