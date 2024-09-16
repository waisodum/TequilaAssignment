import React from "react";
import Title from "./title";

function Navbar() {
  return (
    <div className="flex justify-between items-center navbar py-0">
      {/* Title on the left */}
      <div className="">
        <Title />
      </div>

      {/* Right side elements */}
      <div className="block">
        <div className="p-0">
          <div className="flex justify-end p-0">
            <button className="btn">+971 50 937 2493</button>
            <button className="btn">info@tequila.ae</button>
          </div>
          <div className="flex justify-between space-x-4">
            <a href="#home" className="text-gray-700 navEL">
              Home
            </a>

            <a href="#contact" className="text-gray-700 navEL">
              Our work
            </a>
            <a href="#contact" className="text-gray-700 navEL">
              What we do &#709;
            </a>
            <a href="#contact" className="text-gray-700 navEL">
              The agency
            </a>
            <a href="#contact" className="text-gray-700 navEL">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 navEL">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
