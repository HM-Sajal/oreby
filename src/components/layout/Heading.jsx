import React from 'react'

const Heading = ({ as, className, title, headingClasses, ...rest}) => {
  // const headingClasses = `${heading1? "font-dm text-primary text-base md:text-[18px] lg:text-heading font-bold": ""}
  // ${heading2? "font-dm font-bold text-base md:text-heading2 lg:max-xl:text-sm text-primary":""}`;

  return (
    <as className={`${className}`}>
      {title}
    </as>
  );
};


export default Heading
