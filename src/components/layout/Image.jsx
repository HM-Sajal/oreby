import React from 'react'

const Image = ({imgsrc, alt, className}) => {
  return (
    <img className={`${className}`} src={imgsrc} alt={alt} />
  )
}

export default Image