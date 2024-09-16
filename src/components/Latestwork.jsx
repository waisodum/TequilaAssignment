import React from "react";
import logo1 from "./LO-410x550-1.webp";
import logo2 from "./edaddy-thumb.webp";
import logo3 from "./rayqube-branding-agency-dubai-thumbnail.webp";
import logo4 from "./rex-410x550-1.webp";
import logo5 from "./LO-410x550-1.webp";
import logo6 from "./ss-410x550-1.webp";
const data = [
  {
    name: "Rayqube Future Tech",
    sub: "An Experiential Technology Company, based in Saudi Arabia",
    tags: ["Brand Guidelines", "Branding"],
    image: logo1,
  },
  {
    name: "Rayqube Future Tech",
    sub: "An Experiential Technology Company, based in Saudi Arabia",
    tags: ["Brand Guidelines", "Branding"],
    image: logo2,
  },
  {
    name: "Rayqube Future Tech",
    sub: "An Experiential Technology Company, based in Saudi Arabia",
    tags: ["Brand Guidelines", "Branding"],
    image: logo3,
  },
  {
    name: "Rayqube Future Tech",
    sub: "An Experiential Technology Company, based in Saudi Arabia",
    tags: ["Brand Guidelines", "Branding"],
    image: logo4,
  },
  {
    name: "Rayqube Future Tech",
    sub: "An Experiential Technology Company, based in Saudi Arabia",
    tags: ["Brand Guidelines", "Branding"],
    image: logo5,
  },
  {
    name: "Rayqube Future Tech",
    sub: "An Experiential Technology Company, based in Saudi Arabia",
    tags: ["Brand Guidelines", "Branding"],
    image: logo6,
  },
];
function LatestWork() {
  return (
    <div className="px-28 my-20">
      <div className="text">OUR LATEST WORK</div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((i) => (
          <div>
            <img className="Limage" src={i.image} alt="" />
            <div className="mt-3">
              {i.tags.map((i) => (
                <span className="tagss">{i}</span>
              ))}
              <div className="text">{i.name}</div>
              <div className="sub">{i.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center something3">
      <button className="btn mt-10 "> View all project <span className="something2">➡</span></button>
      </div>
    </div>
  );
}

export default LatestWork;
