import { useEffect, useState } from 'react';
import Logo from "../../assets/logo.png";
import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import { LiaBarsSolid  } from 'react-icons/lia';
import Container from './Container';

const Navbar = () => {
    const [show, setShow] = useState(true);

    useEffect(()=>{
      function scrollWidth(e){
        if(window.innerWidth < 1024){
          setShow(false)
        }else{
          setShow(true)
        }
      }
      scrollWidth()
      window.addEventListener("resize", scrollWidth);
    },[])

  return (
    <nav className='py-8'>
        <Container>
          <Flex className='lg:flex'>
            <div className="w-3/12">
              <Image className='max-w-full' imgsrc={Logo}/>
            </div>
            <div className="lg:w-9/12 w-full">
            <LiaBarsSolid onClick={()=>setShow(!show)} className='ml-auto block lg:hidden absolute top-[42px] right-2.5'/>
              {show && 
              <List className='lg:flex lg:justify-end lg:gap-x-10 text-sm font-dm font-normal mt-5 lg:mt-0 text-lightText'>
                <ListItem to="/" className='font-bold my-2.5 lg:my-0' itemName='Home'></ListItem>
                <ListItem to="/shope" className='hover:font-bold hover:text-primary my-2.5 lg:my-0' itemName='Shop'></ListItem>
                <ListItem to="/about" className='hover:font-bold hover:text-primary my-2.5 lg:my-0' itemName='About'></ListItem>
                <ListItem to="/contact" className='hover:font-bold hover:text-primary my-2.5 lg:my-0' itemName='Contacts'></ListItem>
                <ListItem to="/404" className='hover:font-bold hover:text-primary my-2.5 lg:my-0' itemName='Journal'></ListItem>
              </List>
              }
            </div>
          </Flex>
        </Container>
      </nav>
  )
}

export default Navbar