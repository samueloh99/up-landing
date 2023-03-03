import { useState } from "react";
import { navLinks } from "../constants";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../assets/logo.png";

interface Props {
  handleScroll: (location: string) => void;
}

const Navbar = ({ handleScroll }: Props) => {
  const [active, setActive] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full m-auto flex py-6 px-[20px] md:px-[150px] h-[90px] justify-between items-center navbar text-black bg-white">
      <a className="cursor-pointer" href="/">
        <img src={Logo} alt="logo" className="w-[150px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]`}
            onClick={() => {
              setActive(nav.title);
              if (nav.id === "about") {
                handleScroll("about-us");
              }
              if (nav.id === "work") {
                handleScroll("work");
              }
              if (nav.id === "cases") {
                handleScroll("cases");
              }
            }}
          >
            {nav.title}
          </li>
        ))}
      </ul>
      <div
        className="flex flex-col sm:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <AiOutlineMenu size="30px" color="black" />
      </div>
      <div></div>
      <div className="flex pl-[20px] sm:flex hidden">
        <button
          className="rounded-md text-white bg-btnStn	px-10 py-1"
          onClick={() => handleScroll("location")}
        >
          FALE CONOSCO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
