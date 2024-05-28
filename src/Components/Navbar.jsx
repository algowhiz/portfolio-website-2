import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleMobileMenu = () => {
    setMobileView(!mobileView);
  };

  return ( 
    <div className="flex justify-between items-center p-6 shadow-lg bg-white fixed w-full top-0 z-50 ">
      <div className="logo flex">
        <h3 className="text-xl font-bold">manish.dev</h3>
      </div>
      <div className="hidden sm:flex space-x-5 ">
        {['Home', 'About', 'Projects', 'Contact'].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            duration={600}
            smooth={true}
            offset={-70}
            className="cursor-pointer font-bold hover:text-blue-500"
          >
            {section}
          </Link>
        ))}
      </div>
      <div className="sm:hidden flex items-center" onClick={toggleMobileMenu}>
        {!mobileView ? <RxHamburgerMenu size={24} /> : <RxCross2 size={24} />}
      </div>
      {mobileView && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg sm:hidden text-xl h-screen ">
          <div className="flex flex-col gap-16 items-center py-44 mb-14">
            {['Home', 'About', 'Projects', 'Contact'].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                duration={600}
                smooth={true}
                offset={-70}
                className="cursor-pointer block w-full text-center py-2 font-bold hover:bg-gray-200"
                onClick={() => setMobileView(false)}
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
