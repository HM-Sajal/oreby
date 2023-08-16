import React from 'react';
import Container from '../components/layout/Container';
import Paragraph from '../components/layout/Paragraph';
import Search from '../components/layout/Search';
import { RiSearchLine } from 'react-icons/ri';
import Button from '../components/layout/Button';

const NotFound = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className='font-dm font-bold text-primary text-mainHeading md:text-[200px]'>404</h1>
          <Paragraph className="leading-6 md:leading-8 text-base font-normal md:max-lg:w-full lg:max-xl:w-2/3 xl:w-2/5">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</Paragraph>
          <div className="w-auto lg:w-[600px] relative my-12 border border-lightBorder">
            <Search className='w-full py-4 pl-5 text-sm font-dm font-normal placeholder:text-[#C4C4C4]' placeholder='Search Products'/>
            <RiSearchLine className='absolute top-5 right-4'/>
          </div>
          <div>
            <Button to="/" btnTitle="Back to Home"/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NotFound