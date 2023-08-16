import React from 'react';
import Container from '../components/layout/Container';
import Breadcrump from '../components/layout/Breadcrump';
import Paragraph from '../components/layout/Paragraph';
import Heading from '../components/layout/Heading';
import Input from '../components/layout/Input';
import Button from '../components/layout/Button';

const Signup = () => {
  return (
    <div>
        <Container>
            <Breadcrump title="Sign Up"/>
            <div className='min-w-full pb-14 mb-14 border-b border-solid border-lightBorder'>
              <Paragraph className="max-w-2xl" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
            </div>
            <div className='mb-32'>
              <Heading title="Your Personal Details"/>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="email" title="First Name" placeholder="First Name" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="password" title="Last Name" placeholder="Last Name" as="input"/>
                </div>
              </div>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="email" title="Email Address" placeholder="company@domain.com" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="password" title="Telephone" placeholder="Your phone number" as="input"/>
                </div>
              </div>
            </div>
            <div className='mb-32'>
              <Heading title="New Custmer"/>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="email" title="Address 1" placeholder="4279 Zboncak Port Suite 6212" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="password" title="Address 2" placeholder="_" as="input"/>
                </div>
              </div>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="text" title="City" placeholder="Your City" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="number" title="Post Code" placeholder="8800" as="input"/>
                </div>
              </div>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="text" title="Country" placeholder="Your Select" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="text" title="Region/State" placeholder="Your Select" as="input"/>
                </div>
              </div>
            </div>
            <div className='mb-32'>
              <Heading title="Your Password"/>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="password" title="Password" placeholder="Password" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="password" title="Repeat Password" placeholder="Repeat Password" as="input"/>
                </div>
              </div>
            </div>
            <div className='mb-28'>
              <div className='max-w-5xl flex-col mb-7'>
                <div className='flex mb-6'>
                  <Input className="w-[auto] mr-4" type="checkbox" as="input"/>
                  <Paragraph title="I have read and agree to the Privacy Policy"/>
                </div>
                <div className='flex justify-between w-[345px]'>
                  <Paragraph title="Subscribe Newsletter"/>
                  <Input className="w-[auto]" type="checkbox" as="input"/>Yes
                  <Input className="w-[auto]" type="checkbox" as="input"/>No
                </div>
              </div>
              <Button className="px-16" btnTitle="Log In"/>
            </div>
        </Container>
    </div>
  )
}

export default Signup