import React from 'react';
import Breadcrump from '../components/layout/Breadcrump';
import Container from '../components/layout/Container';
import Image from '../components/layout/Image';
import Product1 from '../assets/about2.png';
import Product2 from '../assets/cart.png';
import Product3 from '../assets/offer3.png';
import Product4 from '../assets/offer2.png';
import {Link} from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div>
        <Container>
            <Breadcrump title="Product"/>
            <div className='w-full flex flex-wrap gap-x-10 gap-y-10'>
              <Link className='w-[48.5%]' to="#"><Image className='w-full object-contain' imgsrc={Product1}/></Link>
              <Link className='w-[48.5%]' to="#"><Image className='w-full object-contain' imgsrc={Product2}/></Link>
              <Link className='w-[48.5%]' to="#"><Image className='w-full object-contain' imgsrc={Product3}/></Link>
              <Link className='w-[48.5%]' to="#"><Image className='w-full object-contain' imgsrc={Product4}/></Link>
            </div>
        </Container>
    </div>
  )
}

export default ProductDetails