import React from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between px-5 py-4 md:px-10 md:py-6">
        <a href="/"><img className="logo" src={logo} alt="logo" width={70} /></a>
        <ul className="flex">
          {navLinks.map((link) => (
            <li key={link.id} className="mx-3 text-white font-raleway">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header
