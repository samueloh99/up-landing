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
    <nav
      className={`w-full sm:relative fixed top-0  m-auto flex py-6 px-[20px] md:px-[150px] h-[90px] justify-between items-center navbar text-black bg-white z-20`}
    >
      <a className="cursor-pointer" href="/">
        <img src={Logo} alt="logo" className="w-[150px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
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
        className="flex flex-col sm:hidden cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <AiOutlineMenu size="30px" color="black" />
      </div>
      {openMenu && (
        <div className="bg-white w-full h-full fixed top-[90px] left-0 z-10 sm:hidden flex">
          <ul className="list-none justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`flex pl-5 justify-start items-center border border-b-[#ccc] h-[60px] font-poppins font-normal cursor-pointer text-[16px]`}
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
                  setOpenMenu(false);
                }}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex pl-20 sm:flex hidden">
        <button
          className="rounded-md text-white bg-btnStn  px-10 py-1"
          onClick={() => handleScroll("location")}
        >
          FALE CONOSCO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
