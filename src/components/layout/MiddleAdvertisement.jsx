import React from 'react';
import Container from './Container';
import Image from './Image';
import MiddleAds from '../../assets/middleAdds.png';

const MiddleAdvertisement = () => {
  return (
    <div className='mt-7 md:mt-28'>
        <Container>
            <div className='w-full'>
                <Image imgsrc={MiddleAds}/>
            </div>
        </Container>
    </div>
  )
}

export default MiddleAdvertisement