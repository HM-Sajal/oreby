import React from 'react';
import Heading from './Heading';
import Container from './Container';
import Product from './Product';
import NewProduct1 from '../../assets/newProduct1.png';
import NewProduct2 from '../../assets/newProduct2.png';
import NewProduct3 from '../../assets/newProduct3.png';
import NewProduct4 from '../../assets/newProduct4.png';
import "slick-carousel/slick/slick.css"; 
import Slider from 'react-slick';
import SimpleNextArrow from './SimpleNextArrow';
import SimplePrevArrow from './SimplePrevArrow';

const Newarrivals = () => {

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
                <Heading heading1 title='New Arrivals' as="h2"/>
            </div>
            <div className='gap-x-10 mt-5 md:mt-12'>
            <Slider {...settings}>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={NewProduct1} badgeTitle='New'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={NewProduct2} badgeTitle='New'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={NewProduct3} badgeTitle='New'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={NewProduct4} badgeTitle='New'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={NewProduct1} badgeTitle='New'/>
                    </div>
                    <div className='max-w-product sm:max-tablet:max-w-[305px] tablet:max-md:max-w-[330px] md:max-lg:max-w-[350px] lg:max-xl:max-w-[235px] relative'>
                        <Product src={NewProduct2} badgeTitle='New'/>
                    </div>
                </Slider>     
            </div>
        </Container>
    </div>
  )
}

export default Newarrivals