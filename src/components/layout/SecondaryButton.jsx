import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryButton = ({btnTitle, to}) => {
  return (
    <Link to={to} className='py-4 px-20 bg-primary text-white border border-solid border-secondary inline-block'>{btnTitle}</Link>
  )
}

export default SecondaryButton