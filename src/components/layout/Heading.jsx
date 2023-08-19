import React from 'react'

const Heading = ({ as: Component = 'h1', className, title }) => {
  let heading1 = "font-dm text-primary text-base md:text-[18px] lg:text-heading font-bold";
  return (
    <Component className={className} heading1={heading1}>
      {title}
    </Component>
  );
};


export default Heading