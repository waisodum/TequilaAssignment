import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styles
import { Carousel } from "react-responsive-carousel";
import something from "./something.webp"
import something1 from "./something1.webp"
const CarouselComponent = () => {
  return (
    <div style={{ maxWidth: "85vw", margin: "auto" }}>
      <Carousel
        showArrows={false} // Show previous and next arrows
        showStatus={false} // Hide the status (e.g., "1 of 3")
        showIndicators={true} // Show dots as indicators
        infiniteLoop={true} // Infinite loop of slides
        autoPlay={true} // Enable automatic sliding
        interval={3000} // Set the speed for auto-moving (3 seconds)
        stopOnHover={true} // Pause the carousel when hovered
        showThumbs={false} // Disable image thumbnails
        swipeable={true} // Enable swiping on touch devices
        dynamicHeight={true} // Adjust height based on image
        emulateTouch={true} // Enable touch events for swiping
      >
        {/* Add your images */}
        <div>
          <img
            className="image"
            src="https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2024/09/teq-banner-zaza-scaled-1.webp"
            alt="Slide 1"
          />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img
            src={something}
            className="image"
            alt="Slide 2"
          />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img
            src={something1}
            className="image"
            alt="Slide 3"
          />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
