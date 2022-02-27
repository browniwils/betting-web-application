import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import FeaturedCarouselMatch from "./featuredCarouselMatch";

const Carousels = () => {
  const [index, setIndex] = useState(0);

  return (
    <Carousel activeIndex={index} onSelect={(i) => setIndex(i)}>
      <Carousel.Item>
        <FeaturedCarouselMatch isActive={true} />
      </Carousel.Item>
      <Carousel.Item>
        <FeaturedCarouselMatch isActive={true} />
      </Carousel.Item>
      <Carousel.Item>
        <FeaturedCarouselMatch isActive={true} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
