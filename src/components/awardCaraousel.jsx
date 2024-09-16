import React from "react";
import "./ImageSlider.css"; // For the CSS

const images = [
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/dubais-best.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/clutch-top-agency.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/sortlist.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Web-Design-Company.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Logo-Design.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/tally.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/mea.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/dubais-best.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/clutch-top-agency.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/sortlist.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Web-Design-Company.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Logo-Design.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/tally.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/mea.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/dubais-best.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/clutch-top-agency.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/sortlist.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Web-Design-Company.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Logo-Design.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/tally.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/mea.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/dubais-best.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/clutch-top-agency.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/sortlist.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Web-Design-Company.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Logo-Design.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/tally.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/mea.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/dubais-best.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/clutch-top-agency.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/sortlist.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Web-Design-Company.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Logo-Design.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/tally.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/mea.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/dubais-best.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/clutch-top-agency.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/sortlist.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Web-Design-Company.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/12/Best-Logo-Design.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/tally.webp",
  "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/mea.webp",
];

const ContinuousSlider = () => {
  return (
    <div className="slid-wrapper">
      <div className="slder">
        {images.map((src, index) => (
          <img  className="imager" src={src} alt={`Slide ${index}`} />
        ))}
        {images.map((src, index) => (
          <img className="imager" src={src} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ContinuousSlider;
