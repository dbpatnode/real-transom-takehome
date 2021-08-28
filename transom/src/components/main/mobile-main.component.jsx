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
                            numberOfSlides: 1
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