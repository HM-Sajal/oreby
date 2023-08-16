import React from 'react';
import { Link } from 'react-router-dom';
import {LiaAngleRightSolid} from 'react-icons/lia';
const Breadcrump = ({title}) => {
  return (
    <div className='my-12 md:my-28'>
        <h1 className='font-dm text-heading md:text-mainHeading font-bold text-primary mb-1 md:mb-2'>{title}</h1>
        <p className='font-dm text-xs font-normal text-lightText flex items-center gap-x-2 capitalize'>
            <Link to='/'>Home</Link><LiaAngleRightSolid/>{window.location.pathname.split("/")[1]}
        </p>
    </div>
  )
}

export default Breadcrump