// TestimonialCarousel.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles

const testimonials = [
  {
    imgSrc:
      "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/tesimonial/trash/Main-banner-1a-1440X790-dd-1.webp",
    name: "Samah Fahs",
    role: "CEO, CoreFit",
    quote:
      "From conceptualization through to delivery, the team was with us every step of the way and left no stone unturned in the delivery of a great end-product.",
  },
  {
    imgSrc:
      "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/tesimonial/trash/Main-banner-1a-1440X790-dd-1.webp",
    name: "Samah Fahs",
    role: "CEO, CoreFit",
    quote:
      "From conceptualization through to delivery, the team was with us every step of the way and left no stone unturned in the delivery of a great end-product.",
  },
  {
    imgSrc:
      "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/tesimonial/trash/Main-banner-1a-1440X790-dd-1.webp",
    name: "Samah Fahs",
    role: "CEO, CoreFit",
    quote:
      "From conceptualization through to delivery, the team was with us every step of the way and left no stone unturned in the delivery of a great end-product.",
  },
  {
    imgSrc:
      "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/tesimonial/trash/Main-banner-1a-1440X790-dd-1.webp",
    name: "Samah Fahs",
    role: "CEO, CoreFit",
    quote:
      "From conceptualization through to delivery, the team was with us every step of the way and left no stone unturned in the delivery of a great end-product.",
  },
  {
    imgSrc:
      "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/themes/tequila/assets/images/tesimonial/trash/Main-banner-1a-1440X790-dd-1.webp",
    name: "Samah Fahs",
    role: "CEO, CoreFit",
    quote:
      "From conceptualization through to delivery, the team was with us every step of the way and left no stone unturned in the delivery of a great end-product.",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="px-28 mt-20 rounded-md	">
    <div className="text">OUR CLIENTS SPEAK</div>
    <div className="caras">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <img style={{width:"50%",borderRadius:"1rem"}}className="w-6/12  " src={testimonial.imgSrc} alt={testimonial.name} />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default TestimonialCarousel;
