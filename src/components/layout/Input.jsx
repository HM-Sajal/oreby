import React from 'react'

const Input = (props) => {
  return (
    <>
        <h4 className='font-dm text-base font-bold'>{props.title}</h4>
        <props.as type={props.type} placeholder={props.placeholder} className={`border-b border-solid border-lightBorder w-full py-4 placeholder:text-dm placeholder:text-sm placeholder:font-normal placeholder:text-lightText outline-0 ${props.className}`}/>
    </>
  )
}

export default Input