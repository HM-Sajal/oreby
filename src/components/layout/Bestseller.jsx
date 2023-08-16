import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Product from './Product';
import BestSeller1 from '../../assets/bestseller1.png';
import BestSeller2 from '../../assets/bestseller2.png';
import BestSeller3 from '../../assets/bestseller3.png';
import BestSeller4 from '../../assets/bestseller4.png';
import "slick-carousel/slick/slick.css"; 
import Slider from 'react-slick';
import SimpleNextArrow from './SimpleNextArrow';
import SimplePrevArrow from './SimplePrevArrow';

const Bestseller = () => {

    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
  return (
    <div className='mt-10 md:mt-28'>
        <Container>
            <div>
                <Heading title='Best Sellers'/>
            </div>
            <div className='gap-x-10 mt-5 md:mt-12'>
            <Slider {...settings}>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={BestSeller1} badgeTitle='Top Sells'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={BestSeller2} badgeTitle='Top Sells'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={BestSeller3} badgeTitle='Top Sells'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={BestSeller4} badgeTitle='Top Sells'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={BestSeller1} badgeTitle='Top Sells'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={BestSeller2} badgeTitle='Top Sells'/>
                    </div>
                </Slider>     
            </div>
        </Container>
    </div>
  )
}


export default Bestseller