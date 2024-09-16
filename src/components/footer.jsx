import React, { useEffect, useState } from "react";
import teq from "./teqmehigh.svg";
import teq1 from "./teqmehigh1.svg";
function Footer() {
  const [first, setfirst] = useState(
    "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/close-eye.svg"
  );
  useEffect(() => {
    var some = document.getElementById("something1");
    some.addEventListener("mouseenter", (e) => {
      setfirst(
        "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/open-eye.svg"
      );
    });
    some.addEventListener("mouseleave", (e) => {
      setfirst(
        "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/close-eye.svg"
      );
    });
    return () => {};
  }, []);

  return (
    <div className="flex px-28  my-7">
      <div>
        <div className="" id="something1">
          <img src={teq} id="somethingg" alt="" />
          <div className="u">
            <img
              style={{ width: "130px", height: "130px" }}
              src={first}
              className=" somethingscc"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mr-10">
        <div className="titlee py-3">QUICK LINKS</div>
        <div>Home</div>
        <div>Our Work</div>
        <div>What we do</div>
        <div>The Agency</div>
        <div>Blog</div>
        <div>Contact us</div>
      </div>
      <div className="mr-10">
        <div className="titlee py-3">SERVICES</div>
        <div className="o">
          <b>
            Logo Design, Branding <br></br>& Graphic Design
          </b>
        </div>
        <div>Branding</div>
        <div>Logo Design</div>
        <div>Graphic Design</div>
        <div> Company Profile Design</div>
        <div className="o">
          <b>Digital Marketing</b>
        </div>
        <div> Social Media Management</div>
        <div> Search Engine Optimisation</div>
      </div>
      <div className="mr-10">
        <div className="o">
          <b>Web design & development</b>
        </div>
        <div> Web Design</div>
        <div>UX/UI Design</div>
        <div>Web Development</div>
        <div>
          Ecommerce Websites<br></br> Domain Name & Hosting
        </div>
      </div>
      <div className="mr-10">
        <div className="titlee py-3">FIND US</div>
        <div>
          A904, Tamani Arts, Business Bay,<br></br> Downtown Dubai, UAE<br></br>{" "}
          <br></br>
          <br></br>
          +971 50 937 2493
          <br></br>
          +971 4 422 4814 info@tequila.ae
        </div>
        <div className="mt-4">
          <button className="btn8  mr-1  px-3">FB</button>
          <button className="btn8 mx-1 px-3">IG</button>
          <button className="btn8 mx-1 px-3">IN</button>
          <button className="btn8 mx-1 px-3">X</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
