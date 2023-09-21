import React from 'react';
import Image from './Image';
import Badge from './Badge';
import Flex from './Flex';
import {BsFillHeartFill} from 'react-icons/bs';
import {TfiReload} from 'react-icons/tfi';
import {PiShoppingCartSimpleFill} from 'react-icons/pi';
import Paragraph from './Paragraph';
import Heading from './Heading';

const Product = ({src, badgeTitle}) => {
  return (
    <div>
      <div className='relative overflow-y-hidden group'>
        <Image className='w-full' imgsrc={src}/>
        {badgeTitle && 
            <Badge title={badgeTitle}/>
        }
        <div className="bg-white w-full h-28 md:h-40 lg:max-xl:h-24 absolute bottom-0 left-0 py-3 md:py-6 lg:max-xl:py-2 lg:max-xl:mb-[-100%] px-7 mb-[-44%] group-hover:mb-0 ease-in duration-200">
            <Flex className='justify-end items-center gap-x-4'>
                <Paragraph className='font-normal text-sm md:text-base lg:max-xl:text-[12px] text-lightText' title='Add to Wish List'/>
                <BsFillHeartFill className='text-sm md:text-base lg:max-xl:text-[12px]'/>
            </Flex>
            <Flex className='justify-end items-center my-2 md:my-5 lg:max-xl:my-1 gap-x-4'>
                <Paragraph className='font-dm font-normal text-sm md:text-base lg:max-xl:text-[12px] text-lightText' title='Compare'/>
                <TfiReload className='text-sm md:text-base lg:max-xl:text-[12px]'/>
            </Flex>
            <Flex className='justify-end items-center gap-x-4'>
                <Paragraph className='font-dm font-normal text-sm md:text-base lg:max-xl:text-[12px] text-lightText' title='Add to Cart'/>
                <PiShoppingCartSimpleFill className='text-sm md:text-base lg:max-xl:text-[12px]'/>
          </Flex>            
        </div>
      </div>
      <div>
        <Flex className='justify-between mt-4 md:mt-6 mb-2 md:mb-4 lg:max-xl:mb-1'>
          <Heading as="h3" heading2 title='Basic Crew Neck Tee'/>
          <Paragraph className='font-normal text-sm md:text-base lg:max-xl:text-[12px]' title='$44.00'/>  
        </Flex>
          <Paragraph className='font-normal text-sm md:text-base lg:max-xl:text-[12px]' title='Black'/>  
      </div>
    </div>

  )
}

export default Product