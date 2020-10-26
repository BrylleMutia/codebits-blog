import React from "react";
import { carousel } from "./ImgCarousel.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgCarousel = ({ postImages }) => {
    return (
        <div className={carousel}>
            <Carousel>
                {postImages.map((image, index) => (
                    <div>
                        <img key={index} src={`/${image}`} alt={`carousel-${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImgCarousel;
