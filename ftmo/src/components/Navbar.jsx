import styles from "../constants/styles";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex w-full fixed items-center justify-between text-white bg-[#1e1e1e] py-4 px-10 z-50">
      <img
        className="pr-6"
        src="https://ftmo.com/wp-content/uploads/2022/01/ftmo_logo.svg"
        alt="logo"
      />
      <ul className="flex font-poppins leading-10  tracking-wider font-normal">
        {styles.navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal  hover:text-primary cursor-pointer transition-all ease-in-out duration-300  ${
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
    </nav>
  );
};

export default Navbar;
