import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='font-dm font-bold text-sm text-white bg-primary py-2 px-7 absolute top-5 left-5'>{title}</span>
  )
}

export default Badge