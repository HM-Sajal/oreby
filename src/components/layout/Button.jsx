import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({btnTitle, to, className}) => {
  return (
    <Link to={to} className={`py-4 px-10 bg-primary text-white font-bold border border-solid border-secondary inline-block ${className}`}>{btnTitle}</Link>
  )
}

export default Button