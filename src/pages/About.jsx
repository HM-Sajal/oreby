import React from 'react';
import Container from '../components/layout/Container';
import Breadcrump from '../components/layout/Breadcrump';
import Image from '../components/layout/Image';
import About1 from '../assets/about1.png';
import About2 from '../assets/about2.png';
import Flex from '../components/layout/Flex';
import Heading from "../components/layout/Heading";
import AboutBox from '../components/layout/AboutBox';

const About = () => {
  return (
    <div>
        <Container>
            <Breadcrump title="About"/>
            <div className="block sm:flex sm:justify-between gap-x-10">
              <div className='w-full sm:w-2/4'>
                <Image className="w-full mb-6 sm:mb-0" imgsrc={About1}/>
              </div>
              <div className='w-full sm:w-2/4'>
                <Image className="w-full" imgsrc={About2}/>
              </div>
            </div>
            <div className='my-12 md:my-28'>
              <Heading className="font-normal leading-normal" title="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."/>
            </div>
            <div className="gap-x-10 block sm:flex gap-y-8">
              <AboutBox title="Our Vission" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
              <AboutBox title="Our Story" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."/>
              <AboutBox title="Our Brand" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."/>
            </div>
        </Container>
    </div>
  )
}

export default About