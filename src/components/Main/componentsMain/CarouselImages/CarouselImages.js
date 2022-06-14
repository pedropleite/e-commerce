import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import classes from './CarouselImages.module.css';

const CarouselData = [require('../../../../assets/sliderImages/d2.png'), require('../../../../assets/sliderImages/d6.png')];

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={CarouselData[0]} alt={'  Pizza Carousel'} className={classes.carouselImg}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CarouselData[1]} alt={'  Pizza Carousel'} className={classes.carouselImg}></img>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
