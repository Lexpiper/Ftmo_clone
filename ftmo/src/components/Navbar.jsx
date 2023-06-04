import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import styles from "../constants/data";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex w-full fixed items-center justify-between text-white bg-[#1e1e1e] py-4 px-10 z-50">
      <img
        className="pr-6"
        src="https://ftmo.com/wp-content/uploads/2022/01/ftmo_logo.svg"
        alt="logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex font-poppins leading-10 tracking-wider font-normal">
        {styles.navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal hover:text-primary cursor-pointer transition-all ease-in-out duration-300 ${
              index === nav.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href="">{nav.title}</a>
          </li>
        ))}
        <span className="flex items-center">
          <img
            className="w-6 h-6 mr-2"
            src="https://ftmo.com/wp-content/uploads/flags/en.png"
            alt="en"
          />
          <span>EN</span>
          <AiOutlineSearch className="font-bold text-lg ml-3" />
        </span>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-2xl" />
        </button>
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 bg-[#1e1e1e] py-4 px-10">
            <ul className="flex flex-col font-poppins font-normal">
              {styles.navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="mb-4"
                >
                  <a href="">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
