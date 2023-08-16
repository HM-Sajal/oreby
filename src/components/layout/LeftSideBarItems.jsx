import React,{useState} from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import Paragraph from './Paragraph';

const LeftSideBarItems = (props) => {
    const [dropSubShow, setDropSubShow] = useState(props.subDropDown);
    const [show, setShow] = useState(false);
    
  return (
    <div className='last:mb-10'>
        {dropSubShow 
        ? (
          <div onClick={() => setShow(!show)} className='flex items-center justify-between border-b border-solid border-lightBorder'>
            <Paragraph className="cursor-pointer font-normal text-base leading-7 text-lightText py-5">
            {props.color && 
            <span className='inline-block w-3 h-3 rounded-full mr-3' style={{ backgroundColor: props.color }}></span>
            } 
            {props.dropSubTitle}
            </Paragraph>
            {show 
            ?
            <AiOutlineMinus className='cursor-pointer'/>
            :
            <AiOutlinePlus className='cursor-pointer'/>
            }
        </div>
        ) : (
          <div className='flex items-center justify-between border-b border-solid border-lightBorder'>
          <Paragraph className="cursor-pointer font-normal text-base leading-7 text-lightText py-5">
          {props.color && 
          <span className='inline-block w-3 h-3 rounded-full mr-3' style={{ backgroundColor: props.color }}></span>
          }
          {props.dropSubTitle}
          </Paragraph>
      </div> 
        )}
        
        {show && 
        <div>
          {props.children}
            {/* <p className="font-normal text-base leading-7 text-lightText py-5 border-b border-solid border-lightBorder"></p> */}
        </div>
        }
    </div>
  )
}

export default LeftSideBarItems