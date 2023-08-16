import React from 'react';
import Container from '../components/layout/Container';
import Breadcrump from '../components/layout/Breadcrump';
import Paragraph from '../components/layout/Paragraph';
import Heading from '../components/layout/Heading';
import Input from '../components/layout/Input';
import Button from '../components/layout/Button';

const Login = () => {
  return (
    <div>
        <Container>
            <Breadcrump title="Login"/>
            <div className='min-w-full pb-14 mb-14 border-b border-solid border-lightBorder'>
              <Paragraph className="max-w-2xl" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
            </div>
            <div className='mb-32'>
              <Heading title="Returning Customer"/>
              <div className='max-w-5xl flex justify-start gap-x-10 mt-10 mb-7'>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="email" title="Email Address" placeholder="company@domain.com" as="input"/>
                </div>
                <div className='min-w-2/4'>
                  <Input className="w-full" type="password" title="Password" placeholder="*******" as="input"/>
                </div>
              </div>
              <Button className="bg-transparent text-black px-16" btnTitle="Log In"/>
            </div>
            <div>
              <Heading title="New Customer"/>
              <Paragraph className="max-w-2xl mt-10 mb-12" title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."/>
              <Button className="px-14" btnTitle="Continue"/>
            </div>
        </Container>
    </div>
  )
}

export default Login