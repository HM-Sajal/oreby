import React from 'react'
import List from './List'
import ListItem from './ListItem'
const FooterSection = ({title, items}) => {
  return (
    <div className="w-[33%] md:w-[13%]">
        <h4 className='mb-4 font-dm text-sm md:text-base font-bold'>{title}</h4>
        <List>
            {items.map((item, index)=>(
                <ListItem
                key={index}
                className="font-regular mt-[6px] font-dm text-xs md:text-sm text-[#6D6D6D]"
                itemName={item.name}
                href={item.href}
                />
            ))}
        </List>
    </div>
  )
}

export default FooterSection