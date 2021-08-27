import React from 'react';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './main.style.scss'

function Main() {
    return (<div className="main">
        <div >
            <img src="images/main-image.png" alt="" />
        </div >

        <div className="carousel-container">
            <Carousel plugins={[
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2
                    }
                },
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