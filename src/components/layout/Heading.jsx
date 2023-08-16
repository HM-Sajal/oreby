import React from 'react'

const Heading = ({title, className}) => {
  return (
    <h2 className={`font-dm text-primary text-base md:text-[18px] lg:text-heading font-bold ${className}`}>{title}</h2>
  )
}

export default Heading