import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="../img-01.jpeg" alt="" />
                </div>
                <div>
                    <img src="../img-02.jpeg" alt=""/>
                </div>
                <div>
                    <img src="../img-03.jpeg" alt=""/>
                </div>
            </Carousel>
        </div>
    );
}