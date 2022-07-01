import { useState } from "react";
import control from "./control.png"


export function Testing(){
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: {control} },
    { title: "About", src: "User", gap: true },
    { title: "Top Projetcs ", src: "Calendar" },
    { title: "All Projetcs", src: "Search" },
    { title: "Download CV", src: "Chart" },
    { title: "Github", src: "Folder", gap: true },
    { title: "Likedin", src: "Setting" },
    { title: "Email", src: "Setting" },
  ];

  return (
    <div className="flex bg-white">
      <aside
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Web Developer
          </h1>
        </div>
        <nav className="pt-12">
          <ul>
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-cyan-400 text-gray-300 transition-colors text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={"Menu.src"} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

