import React from "react";
import first from "./Innovative-web-design-solution-in-dubaiThumbnail.webp";
import second from "./Dubais-Best-Branding-Agencies-Tequia.ae-Thumbnail.webp";
import third from "./Real-life-application-of-generative-AI-in-Dubai-Thumbnail.webp";
const data = [
  {
    name: "Beyond the Hype: Real-World Applications of Generative AI for Web....",
    sub: "Recently generative AI has captured the attention of businesses, technologists, and the public alike. It is...",
    tags: ["Website Design"],
    image: first,
  },
  {
    name: "Beyond the Hype: Real-World Applications of Generative AI for Web....",
    sub: "Recently generative AI has captured the attention of businesses, technologists, and the public alike. It is...",
    tags: ["Branding"],
    image: second,
  },
  {
    name: "Beyond the Hype: Real-World Applications of Generative AI for Web....",
    sub: "Recently generative AI has captured the attention of businesses, technologists, and the public alike. It is...",
    tags: ["Website Design"],
    image: third,
  },
];
function Blogs() {
  return (
    <div className="px-28 mt-9">
      <div className="text">Blogs</div>

      <div className="flex">
        {data.map((i) => (
          <div className="cards m-3 ">
            <img src={i.image} alt="" />
            {i.tags.map((i) => (
              <span className="tagss">{i}</span>
            ))}
            <div className="mainT">
              <div className="titleMain">{i.name}</div>
              <div className="titlesub">{i.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center something3">
      <button className="btn mt-10 "> View all Blogs <span className="something2">➡</span></button>
      </div>
    </div>
  );
}

export default Blogs;
