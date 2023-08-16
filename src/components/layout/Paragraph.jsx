import React from 'react'

const Paragraph = ({title, children, className}) => {
  return (
    <p className={`font-dm ${className}`}>{title}{children}</p>
  )
}

export default Paragraph