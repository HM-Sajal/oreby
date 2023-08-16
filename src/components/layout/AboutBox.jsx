import React from 'react';
import Heading4 from './Heading4';
import Paragraph from "./Paragraph";

const AboutBox = ({title, text}) => {
  return (
    <div className='mb-4 sm:mb-0'>
        <Heading4 text={title}/>
        <Paragraph className="mt-3" title={text}/>
    </div>
  )
}

export default AboutBox