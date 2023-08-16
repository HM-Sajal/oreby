import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import SliderImg from '../../assets/banner.png';
import Image from './Image';
import { Link } from 'react-router-dom';

const Banner = () => {
    let [dotActive, setDotActive] = useState(0);
        const settings = {
          dots: true,
          beforeChange: (prev, next) => {
            setDotActive(next);
          },
          arrows: false,
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '8%',
                transform: 'translateY(-50%)',
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={
                i === dotActive 
                ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: '10px 0',
              } 
              : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: '10px 0',
              }}
            >
              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: true,
                appendDots: dots => (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '2%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <ul style={{ margin: "0px" }}> {dots} </ul>
                    </div>
                  ),
                  customPaging: i => (
                    <div
                    style={
                        i === dotActive 
                        ? {
                        width: "30px",
                        color: "#262626",
                        borderRight: "3px #262626 solid",
                        fontSize: '14px',
                      } 
                      : {
                        width: "30px",
                        color: "#262626",
                        borderRight: "3px white solid",
                        fontSize: '14px',
                      }}
                    >
                      0{i + 1}
                    </div>
                  ),
              }
            },
          ]
        };
  return (
    <Slider {...settings}>
        <Link to='#'>
            <div>
                <Image className='w-full' imgsrc={SliderImg}/>
            </div>
        </Link>
        <Link to='#'>
            <div>
                <Image className='w-full' imgsrc={SliderImg}/>
            </div>
        </Link>
        <Link to='#'>
            <div>
                <Image className='w-full' imgsrc={SliderImg}/>
            </div>
        </Link>
    </Slider>
  )
}

export default Banner