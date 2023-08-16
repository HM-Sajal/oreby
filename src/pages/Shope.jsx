import React,{useState, useEffect, useRef} from 'react';
import Container from '../components/layout/Container';
import Breadcrump from '../components/layout/Breadcrump';
import Flex from '../components/layout/Flex';
import Pagination from '../components/layout/Pagination';
import DynamicSelect from '../components/layout/DynamicSelect';
import LeftSideBar from '../components/layout/LeftSideBar';
import {AiOutlineBars} from 'react-icons/ai';
import {SiWindows11} from 'react-icons/si';
import {RiFilterLine, RiFilterOffLine} from "react-icons/ri";


const Shope = () => {
  const [productPerPage,setProductPerPage] = useState(12);
  
  let handleProductPerPage = (e)=>{
    setProductPerPage(+e.target.value)
  }
  const featuredOptions = [
    { value: '', label: 'Featured' }, // Set an empty value for the default selection
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' },
  ];
  
  const showOptions = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '36', label: '36' },
  ];
  
  const [show, setShow] = useState(true);
  let LeftsitebarRef = useRef();
  useEffect(()=>{
    function scrollWidth(e){
      if(window.innerWidth < 500){
        setShow(false)
      }else{
        setShow(true)
      }
    }
    scrollWidth()
    window.addEventListener("resize", scrollWidth);
  },[])
  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
      // console.log(LeftsitebarRef.current);
    })
  },[])


  return (
    <div>
      <Container>
        <Breadcrump title='Product'/>
        <Flex className='gap-x-10 mt-12 md:mt-28 relative'>
          {show &&
          <div className="w-3/5 sm:w-[25%] absolute sm:static top-0 left-0 z-50 bg-[#f6f5f5] px-4" ref={LeftsitebarRef}>
            <RiFilterOffLine onClick={()=>setShow(!show)} className='absolute right-2 top-4 sm:hidden'/>
            <LeftSideBar/>
          </div>
           }
          <div className="w-full md:w-3/4 lg:w-4/5 relative">
            <Flex className="flex-col sm:flex-row justify-start lg:justify-between items-center gap-4 md:max-lg:gap-8 lg:gap-10 mb-3 md:mb-4">
              <div className='hidden md:flex gap-x-5'>
                <div className='w-9 h-9 bg-primary flex justify-center items-center'>
                  <SiWindows11 className='text-white'/>
                </div>
                <div className='w-9 h-9 bg-white group hover:bg-primary flex justify-center items-center'>
                  <AiOutlineBars className='group-hover:text-white group-hover:font-semibold'/>
                </div>
              </div>
              <div className="flex flex-row justify-start lg:justify-end items-center gap-4 md:max-lg:gap-2 lg:gap-10 mb-3 md:mb-4">
                <RiFilterLine className='text-2xl sm:hidden' onClick={()=>setShow(!show)}/>
                <DynamicSelect id="countries1" label="Sort by:" options={featuredOptions} />
                <DynamicSelect onChange={handleProductPerPage} id="countries2" label="Show:" options={showOptions} />
              </div>
            </Flex>
          <Pagination itemsPerPage={productPerPage} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Shope