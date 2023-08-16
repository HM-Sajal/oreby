import React from 'react';
import {CgArrowLongLeft} from 'react-icons/cg';


const SimplePrevArrow = ({className, style, onClick}) => {
    function SimplePrevArrow(props) {
        const { className, style, onClick } = props;
    }
    return (
        <div className='bg-[#0000002e] w-10 h-10 md:w-16 md:h-16 lg:max-xl:h-10 lg:max-xl:w-10 rounded-full text-white flex justify-center items-center absolute top-40 left-0 z-10 lg:max-xl:top-[113px]'
        onClick={onClick}>
        <CgArrowLongLeft/>
        </div>
    )
}

export default SimplePrevArrow