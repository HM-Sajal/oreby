import React from 'react';
import Container from '../layout/Container';
import Flex from './Flex';
import Image from './Image';
import Ad1 from '../../assets/Ad_1.png';
import Ad2 from '../../assets/Ad_2.png';
import Ad3 from '../../assets/Ad_3.png';
import { Link } from 'react-router-dom';

const Advertise = () => {
  return (
    <div className='mt-8 md:mt-36'>
        <Container>
            <Flex className='gap-x-4 md:gap-x-10'>
                <div className='max-w-2/4'>
                    <Link to='#'>                    
                        <Image imgsrc={Ad1}/>
                    </Link>
                </div>
                <div className='max-w-2/4'>
                    <Link to='#'>                    
                        <Image imgsrc={Ad2}/>
                    </Link>
                    <Link to='#' className='mt-2 md:mt-8 inline-block'>                    
                        <Image imgsrc={Ad3}/>
                    </Link>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Advertise