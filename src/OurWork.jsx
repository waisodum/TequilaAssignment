import React from "react";
import logo from "./components/logo-design.svg";
import logo1 from "./components/web-design.svg";
import logo2 from "./components/digital-marketing.svg";
function OurWork() {
  return (
    <section className="flex justify-between ourWork">
      <div className=" workEl ">
        <img src={logo} className="imagert" />
        <div className="main">
          Logo Design, <br></br>Branding & <br></br>Graphic Design
        </div>
        <div className="sub">
          Crafting an effective perception of your brand, and elevating it with
          an efficient visual language
        </div>
        <ul className="list1">
          <li>- Branding</li>
          <li>- Logo Design</li>
          <li>- Graphic Design</li>
          <li>- Company Profile Design</li>
        </ul>
      </div>
      <div className=" workEl ">
        <img src={logo1} className="imagert" />
        <div className="main">Web Design & Development</div>
        <div className="sub">
          Building beautiful, functional, user-centric experiences for highly
          interactive web interfaces & frameworks
        </div>
        <ul className="list1">
          <li>- Web design</li>
          <li>- UI/UX Design</li>
          <li>- Web Development</li>
          <li>- Ecommerce Website</li>
          <li>- Domain Name hosting</li>
        </ul>
      </div>
      <div className=" workEl ">
        <img src={logo2} className="imagert" />
        <div className="main">
          Digital<br></br> Marketing
        </div>
        <div className="sub">
          Elevating your brand's social presence to your potential customers
          aided with effective strategy & design
        </div>
        <ul className="list1">
          <li>- Social Media Management</li>
          <li>- Search Engine Optimisation</li>
        </ul>
      </div>
    </section>
  );
}

export default OurWork;
