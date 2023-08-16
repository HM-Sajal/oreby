import React from 'react';
import {CgArrowLongRight} from 'react-icons/cg';


const SimpleNextArrow = ({onClick}) => {

  return (
    <div className='bg-[#0000002e] w-10 h-10 md:w-16 md:h-16 lg:max-xl:h-10 lg:max-xl:w-10 rounded-full text-white flex justify-center items-center 
    absolute top-40 lg:max-xl:top-[113px] lg:max-xl:right-3 right-0 sm:max-md:right-4 md:max-lg:right-4 lg:right-6 z-10'
      onClick={onClick}
        >
          <CgArrowLongRight/>

    </div>
  )
}
export default SimpleNextArrow