import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Flex from './Flex';
import Dropdown from './Dropdown';
import { RiBarChartHorizontalLine, RiSearchLine, } from 'react-icons/ri';
import {FaUser} from 'react-icons/fa';
import {RxTriangleDown, RxCross2} from 'react-icons/rx';
import {HiShoppingCart} from 'react-icons/hi';
import List from './List';
import ListItem from './ListItem';
import Search from './Search';
import Image from './Image';
import cartImg from '../../assets/cart.png';
import Paragraph from './Paragraph';

const Header = () => {
    let [catagoryDropDownShow, setcatagoryDropDownShow] = useState(false);
    let [userDropDownShow, setUserDropDownShow] = useState(false);
    let [cartDropDownShow, setCartDropDownShow] = useState(false);
    let catagoryRef = useRef();
    let userRef = useRef();
    let cartRef = useRef();
    useEffect(() => {
        document.body.addEventListener("click",(e) => {
            if(catagoryRef.current.contains(e.target)){
                setcatagoryDropDownShow(true);
            }else{
                setcatagoryDropDownShow(false);
            }
            if(userRef.current.contains(e.target)){
                setUserDropDownShow(true);
            }else{
                setUserDropDownShow(false);
            }
            if(cartRef.current.contains(e.target)){
                setCartDropDownShow(true);
            }else{
                setCartDropDownShow(false);
            }
        })
    },[]);

  return (
    <div className="bg-bgColor py-6">
        <Container>
            <Flex className="justify-between">
                <div className='flex items-center'>
                    <Dropdown className='relative z-50' dropref={catagoryRef}>
                        <Paragraph className='flex items-center gap-x-2.5 text-sm font-normal'>
                            <RiBarChartHorizontalLine/>
                            <span className='hidden lg:inline-block'>Shop by Category</span>
                        </Paragraph>
                        {catagoryDropDownShow && (
                        <List className='w-[263px] flex flex-col absolute top-8 bg-primary text-[#767676] font-dm font-normal text-sm'>
                            <ListItem className='py-4 px-5 hover:px-8 duration-100 ease-in hover:font-bold border-b border-solid border-borderColor hover:text-white' itemName='Accesories'/>
                            <ListItem className='py-4 px-5 hover:px-8 duration-100 ease-in hover:font-bold border-b border-solid border-borderColor hover:text-white' itemName='Furniture'/>
                            <ListItem className='py-4 px-5 hover:px-8 duration-100 ease-in hover:font-bold border-b border-solid border-borderColor hover:text-white' itemName='Electronics'/>
                            <ListItem className='py-4 px-5 hover:px-8 duration-100 ease-in hover:font-bold border-b border-solid border-borderColor hover:text-white' itemName='Clothes'/>
                            <ListItem className='py-4 px-5 hover:px-8 duration-100 ease-in hover:font-bold border-b border-solid border-borderColor hover:text-white' itemName='Bags'/>
                            <ListItem className='py-4 px-5 hover:px-8 duration-100 ease-in hover:font-bold border-b border-solid border-borderColor hover:text-white' itemName='Home appliances'/>
                        </List>
                        )}
                    </Dropdown>
                </div>
                <div className="w-auto lg:w-[600px] relative">
                    <Search className='w-full py-4 pl-5 text-sm font-dm font-normal placeholder:text-[#C4C4C4]' placeholder='Search Products'/>
                    <RiSearchLine className='absolute top-5 right-4'/>
                </div>
                <div className='flex items-center'>
                    <Flex className='gap-x-10'>
                        <Dropdown className='relative z-50' dropref={userRef}>
                            <div className="flex">
                                <FaUser/>
                                <RxTriangleDown/>
                            </div> 
                            {userDropDownShow && (
                            <List className='w-[263px] flex flex-col absolute top-8 right-0 bg-white text-[#767676] font-dm font-normal text-sm border border-solid border-lightBorder text-center'>
                                <ListItem className='py-4 px-5 duration-100 ease-in hover:font-bold border-b border-solid border-lightBorder hover:text-white hover:bg-secondary' itemName='My Account'/>
                                <ListItem className='py-4 px-5 duration-100 ease-in hover:font-bold border-b border-solid border-lightBorder hover:text-white hover:bg-secondary' itemName='Log Out'/>
                            </List>
                        )}
                        </Dropdown>
                       
                      
                      <Dropdown className='relative z-50' dropref={cartRef}>
                        <HiShoppingCart className='text-xl'/>

                        {cartDropDownShow && (
                            <div className='bg-bgColor w-[360px] absolute top-8 right-0 border border-solid border-lightBorder'>
                                <Flex className='flex justify-between items-center py-5 pl-5'>
                                    <div className="flex gap-x-2 items-center">
                                        <div>
                                            <Image imgsrc={cartImg}/>
                                        </div>
                                        <div className='font-dm text-sm font-bold flex flex-col gap-y-3'>
                                            <h3>Black Smart Watch</h3>
                                            <h3>$44.00</h3>
                                        </div>
                                    </div>
                                    <div className='mr-2.5'>
                                        <RxCross2/>
                                    </div>
                                </Flex>
                                <div className="bg-white py-3 pl-5">
                                    <div className="text-[#767676] font-normal font-dm text-base">
                                        <h4>Subtotal: <span className='text-primary font-bold'>$44.00</span></h4>
                                    </div>
                                    <div className="font-dm text-sm font-bold text-primary gap-x-4 flex mt-2">
                                        <Link to='#' className='py-4 px-10 border border-solid border-secondary inline-block'>View Cart</Link>
                                        <Link to='#' className='py-4 px-10 bg-primary text-white border border-solid border-secondary inline-block'>View Cart</Link>
                                    </div>
                                </div>
                            </div>
                        
                        )}
                        </Dropdown>
                    </Flex>    
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header