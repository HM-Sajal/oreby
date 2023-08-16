import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({itemName, className, to}) => {
  return (
   <>
    <Link to={to} className={className}>{itemName}</Link>
   </>
  )
}

export default ListItem;