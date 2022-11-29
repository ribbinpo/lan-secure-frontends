import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

// src, alt, text
const carousel = ({ images, width, height, text }) => {
  return (
    <Carousel autoPlay showArrows={true} showThumbs={false}>
      {images.map((items, key) => {
        return (
          <div key={key}>
            <Image
              src={items.src}
              alt={items.alt}
              width={width}
              height={height}
            />
            {(text) && <p className="legend">{items.text}</p>}
          </div>
        );
      })}
    </Carousel>
  );
};

export default carousel;