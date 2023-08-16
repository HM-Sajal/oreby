import React from 'react'
import LeftSideBarContent from './LeftSideBarContent';
import {category, colors, brands, price} from "../../data/data";

const LeftSideBar = ({dropDown}) => {
  return (
    <>
      <LeftSideBarContent dropTitle="Shop by Category" dropDown={false} data={category}/>
      <LeftSideBarContent dropTitle="Shop by Color" dropDown={true} data={colors}/>
      <LeftSideBarContent dropTitle="Shop by Brand" dropDown={true} data={brands}/>
      <LeftSideBarContent dropTitle="Shop by Price" dropDown={false} data={price}/> 
    </>
  )
}

export default LeftSideBar