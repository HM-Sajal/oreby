import React from 'react';
import Flex from './Flex';
import {PiNumberTwoBold} from 'react-icons/pi';
import {FaCaravan} from 'react-icons/fa';
import {RxReload} from 'react-icons/rx';
import Container from '../layout/Container';
import Paragraph from './Paragraph';

const AdditionalInfo = () => {
  return (
    <div className='border border-solid border-lightBorder mt-[-6px]'>
        <Container>
            <Flex className='justify-between'>
                <Flex className='items-center gap-x-1 sm:gap-x-4 py-3 sm:py-6'>
                    <PiNumberTwoBold className='text-[10px] sm:text-2xl'/>
                    <Paragraph className='font-normal text-[10px] sm:text-base text-lightText' title='Two years warranty'/>
                </Flex>
                <Flex className='items-center gap-x-1 sm:gap-x-4 py-3 sm:py-6'>
                    <FaCaravan className='text-[10px] sm:text-2xl'/>
                    <Paragraph className='font-normal text-[10px] sm:text-base text-lightText' title='Free shipping'/>
                </Flex>
                <Flex className='items-center gap-x-1 sm:gap-x-4 py-3 sm:py-6'>
                    <RxReload className='text-[10px] sm:text-2xl'/>
                    <Paragraph className='font-normal text-[10px] sm:text-base text-lightText' title='Return policy in 30 days'/>
                </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default AdditionalInfo