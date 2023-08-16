import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Paragraph from './Paragraph';
import NewProduct1 from '../../assets/newProduct1.png';
import NewProduct2 from '../../assets/newProduct2.png';
import NewProduct3 from '../../assets/newProduct3.png';
import NewProduct4 from '../../assets/newProduct4.png';
import SpacialOffer1 from '../../assets/offer1.png';
import SpacialOffer2 from '../../assets/offer2.png';
import SpacialOffer3 from '../../assets/offer3.png';
import SpacialOffer4 from '../../assets/offer4.png';
import BestSeller1 from '../../assets/bestseller1.png';
import BestSeller2 from '../../assets/bestseller2.png';
import BestSeller3 from '../../assets/bestseller3.png';
import BestSeller4 from '../../assets/bestseller4.png';



// Example items, to simulate fetching from another resources.
const items = [NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4, NewProduct1, NewProduct2, NewProduct3, NewProduct4, SpacialOffer1, SpacialOffer2, SpacialOffer3, SpacialOffer4, BestSeller1, BestSeller2, BestSeller3, BestSeller4,];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div key={item} className='md:w-[48%] lg:w-[32%]'>
                <Product src={item} badgeTitle='New'/>
            </div>
        ))}
    </>
  );
}


const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setItemSelected] = useState(0)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemSelected(endOffset)
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='md:flex md:flex-wrap md:justify-between gap-y-4'>
      <Items currentItems={currentItems} />
    </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName="inline-block text-dm font-normal text-sm border border-solid border-lightBorder py-2 px-3.5"
        previousClassName="hidden"
        nextClassName="hidden"
        containerClassName="flex flex-wrap gap-x-3.5 gap-y-3.5 md:gap-y-0 mt-12"
        activeClassName="inline-block text-dm font-normal text-sm border border-solid border-lightBorder py-2 px-3.5 bg-primary text-white"
      />
      <Paragraph className='lg:absolute lg:bottom-0 lg:right-0 mt-3 lg:mt-0 font-normal text-lightText'>Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}</Paragraph>
    </>
  );
}

export default Pagination