import React from 'react'

const Heading2 = ({title, className}) => {
  return (
    <h3 className={`font-dm font-bold text-base md:text-heading2 lg:max-xl:text-sm text-primary ${className}`}>{title}</h3>
  )
}

export default Heading2