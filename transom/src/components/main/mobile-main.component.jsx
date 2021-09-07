import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './main.style.scss'

function Main() {
    return (
        <div className="main">
            <div className="image-container">
                <img src="images/main-image.png" alt="" />
            </div >
            <div className="carousel-container">
                <Carousel plugins={[
                    // 'centered',
                    'clickToChange',
                    'centered',
                    'infinite',
                    'fastSwipe',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 1
                        }
                    },
                ]}>
                    <div className="carousel-image"><img src={"slider/bacon.jpeg"} alt="bacon" /></div>
                    <div className="carousel-image"><img src={"slider/breakfast-burger.jpg"} alt="breakfast-burger" /></div>
                    <div className="carousel-image"><img src={"slider/breakfast.jpg"} alt="breakfast" /></div>
                    <div className="carousel-image"><img src={"slider/golden-fries.jpg"} alt="french fries" /></div>
                    <div className="carousel-image"><img src={"slider/hotdog.jpg"} alt="hotdog" /></div>
                    <div className="carousel-image"><img src={"slider/icecream.png"} alt="icecream" /></div>
                    <div className="carousel-image"><img src={"slider/meal.jpg"} alt="meal" /></div>
                </Carousel>
            </div>
        </div >
    );
}

export default Main