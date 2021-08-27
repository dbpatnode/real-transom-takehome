import React from 'react';

import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa';
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
                    'infinite',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2
                        }
                    },
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button><Icon name="arrow-left" /></button>,
                            arrowLeftDisabled: <button><Icon name="arrow-left" /></button>,
                            arrowRight: <button><Icon name="arrow-right" /></button>,
                            arrowRightDisabled: <button><Icon name="arrow-right" /></button>,
                            addArrowClickHandler: true,
                        }
                    }
                ]}>
                    <img src={"slider/bacon.jpeg"} alt="bacon" />
                    <img src={"slider/breakfast-burger.jpg"} alt="breakfast-burger" />
                    <img src={"slider/breakfast.jpg"} alt="breakfast" />
                    <img src={"slider/golden-fries.jpg"} alt="french fries" />
                    <img src={"slider/hotdog.jpg"} alt="hotdog" />
                    <img src={"slider/icecream.png"} alt="icecream" />
                    <img src={"slider/meal.jpg"} alt="meal" />
                </Carousel>
            </div>
        </div>
    );
}

export default Main