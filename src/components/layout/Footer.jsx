import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Logo from '../../assets/logo.png';
import FooterSection from "./FooterSection";
import Paragraph from "./Paragraph";
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  let menuItems = [
    {name: 'Home', href: '#'},
    {name: 'Shop', href: '#'},
    {name: 'About', href: '#'},
    {name: 'Contact', href: '#'},
    {name: 'Journal', href: '#'},
  ]
  let shopCatagories = [
    {name: 'Catagory 1', href: '#'},
    {name: 'Catagory 2', href: '#'},
    {name: 'Catagory 3', href: '#'},
    {name: 'Catagory 4', href: '#'},
    {name: 'Catagory 5', href: '#'},
  ]
  let helpItems = [
    {name: 'Privacy Policy', href: '#'},
    {name: 'Terms & Conditions', href: '#'},
    {name: 'Special E-shop', href: '#'},
    {name: 'Shipping', href: '#'},
    {name: 'Secure Payments', href: '#'},
  ]
  return (
    <div className="mt-10 md:mt-36 bg-bgColor py-8 md:py-14">
      <Container>
        <Flex className='flex-wrap md:flex-nowrap justify-between md:justify-start'>
          <FooterSection title='MENU' items={menuItems}/>
          <FooterSection title='SHOP' items={shopCatagories}/>
          <FooterSection title='HELP' items={helpItems}/>
          <div className="flex md:w-[60%] justify-center mt-10 md:mt-0">
            <div className="w-[50%] pl-0 md:pl-10 sm:max-md:-pl-2.5">
              <h4 className="font-dm text-primary font-bold text-sm md:text-base mb-4">(052) 611-5711 <br/> company@domain.com</h4>
              <Paragraph className='text-xs md:text-sm font-normal text-hashColor'>575 Crescent Ave. Quakertown, PA 18951</Paragraph>
            </div>
            <div className="md:w-[50%]">
            <Image className='ml-28' imgsrc={Logo}/>
          </div>
          </div>        
        </Flex>
        <div className='block sm:flex justify-center md:justify-between mt-8 md:mt-14'>
          <div className="flex gap-x-2 md:gap-x-3 w-full md:w-[10%] mb-2 md:mb-0"><FaFacebookF/><FaLinkedinIn/><FaInstagram/></div>
          <div><Paragraph className='text-xs md:text-sm font-normal text-hashColor'>2020 Orebi Minimal eCommerce Figma Template by Adveits</Paragraph></div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;