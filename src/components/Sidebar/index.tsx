import { useState } from "react";
import { Link } from "react-router-dom";
import { transformPath } from "../../utils/changePathToRedirect";
import { Links, MainTitle, Menus } from "./objetcMenu";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const path = transformPath();

  return (
    <aside
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-gray-700 border-x border-gray-600  p-5  pt-8 h-full md:h-full fixed z-10 duration-300 whitespace-nowrap`}
    >
      <img
        src={MainTitle.arrow}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           rounded-full bg-white ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-3 items-center">
        <img
          src={MainTitle.src}
          width={"20px"}
          className={`cursor-pointer duration-500 ${open && "rotate-[720deg]"}`}
        />

        <h1
          className={`text-white origin-left text-2xl duration-200 delay-[50ms] ${
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
            className={`flex rounded-md p-2 cursor-pointer hover:bg-cyan-400 transition-colors text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} 
                ${index === 0 && "bg-light-white"}
                ${Menu.title.toLowerCase() == path ? "bg-cyan-400 " : ""}
                `}
          >
            <img width={20} src={Menu.src} />
            <h2
              className={`origin-left duration-200 delay-[50ms] ${
                !open && "scale-0"
              }`}
            >
              {Menu.title}
            </h2>
          </Link>
        ))}
        {Links.map((Link, index) => (
          <a
            download={Link.download}
            key={index}
            href={Link.href}
            target={Link.target}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-cyan-400 transition-colors text-sm items-center gap-x-4 
                ${Link.gap ? "mt-9" : "mt-2"} 
                `}
          >
            <img width={20} src={Link.src} />
            <span
              className={`origin-left duration-200 delay-[50ms] ${
                !open && "scale-0"
              }`}
            >
              {Link.title}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
