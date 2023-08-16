import React from 'react'
import Banner from '../components/layout/Banner'
import AdditionalInfo from '../components/layout/AdditionalInfo'
import Advertise from '../components/layout/Advertise'
import Newarrivals from '../components/layout/Newarrivals'
import Bestseller from '../components/layout/Bestseller'
import MiddleAdvertisement from '../components/layout/MiddleAdvertisement'
import Spacialoffer from '../components/layout/Spacialoffer'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <>
      <Banner/>
      <AdditionalInfo/>
      <Advertise/>
      <Newarrivals/>
      <Bestseller/>
      <MiddleAdvertisement/>
      <Spacialoffer/>
      
    </>
  )
}

export default Home