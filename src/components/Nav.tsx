import { useState } from "react";
import { headerLogo } from "../assets/images/index.ts";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import type { INavLink } from "../types";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item: INavLink) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-md">
          {navLinks.map((item: INavLink) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
