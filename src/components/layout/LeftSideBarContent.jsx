import React, { useState } from 'react';
import Heading from './Heading';
import { GoTriangleRight, GoTriangleDown } from 'react-icons/go';
import LeftSideBarItems from './LeftSideBarItems';

const LeftSideBarContent = ({ dropDown, dropTitle, dropSubTitle, data }) => {
  const [dropShow, setDropShow] = useState(dropDown);
  const [show, setShow] = useState(dropDown);


  return (
    <div>
      {dropShow ? (
        <div onClick={() => setShow(!show)} className='flex items-center justify-between'>
          <Heading as='h3' heading2 className='cursor-pointer mb-8 mt-4' title={dropTitle} />
          {show ? <GoTriangleDown className='cursor-pointer' /> : <GoTriangleRight className='cursor-pointer' />}
        </div>
      ) : (
        <Heading2 className='cursor-pointer mb-8 mt-4' title={dropTitle} />
      )}

      {show && (
                <>
                {data.map((item, index) =>
                  item.subcategory ? (
                    <LeftSideBarItems
                     subDropDown={true}
                      dropSubTitle={item.name}
                      >
                      {item.subcategory &&
                      item.subcategory.map((subitem) => (
                        <p className='font-normal text-base leading-7 text-lightText py-5 border-b border-solid
                         border-lightBorder'>{subitem.name}</p>
                      ))}
                    </LeftSideBarItems>
                  ) : (
                    <LeftSideBarItems
                      subDropDown={item.subcategory ? true : false}
                      dropSubTitle={item.name}
                      color={item.code}
                    >
                      {item.subcategory &&
                      item.subcategory.map((subitem) => (
                        <p className='font-normal text-base leading-7 text-lightText py-5 border-b border-solid border-lightBorder'>{subitem.name}</p>
                      ))}
                    </LeftSideBarItems>
                  )
                )}
              </>
      )}

      {!dropShow && (

        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <LeftSideBarItems
               subDropDown={true}
                dropSubTitle={item.name}
                >
                {item.subcategory &&
                item.subcategory.map((subitem) => (
                  <p className='font-normal text-base leading-7 text-lightText py-5 border-b border-solid border-lightBorder'>{subitem.name}</p>
                ))}
              </LeftSideBarItems>
            ) : (
              <LeftSideBarItems
                subDropDown={item.subcategory ? true : false}
                dropSubTitle={item.name}
                color={item.code}
              >
                {item.subcategory &&
                item.subcategory.map((subitem) => (
                  <p className='font-normal text-base leading-7 text-lightText py-5 border-b border-solid border-lightBorder'>{subitem.name}</p>
                ))}
              </LeftSideBarItems>

            )
          )}
        </>
      )}
    </div>
  );
};

export default LeftSideBarContent;
