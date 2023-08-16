import React from 'react';
import Container from '../components/layout/Container';
import Breadcrump from '../components/layout/Breadcrump';
import Heading from "../components/layout/Heading";
import Input from '../components/layout/Input';
import SecondaryButton from "../components/layout/SecondaryButton";

const Contacts = () => {
  return (
    <div>
        <Container>
            <Breadcrump title="Contact"/>
            <div className='w-2/4'>
              <Heading className="mb-10" title="Fill up a Form"/>
              <Input title="Name" as="input" type="text" placeholder="Enter your name"/>
              <Input title="Email" as="input" type="email" placeholder="Enter your email"/>
              <Input title="Massege" as="textarea" type="text" placeholder="Massege"/>
            </div>
            <SecondaryButton btnTitle="Post"/>
        </Container>
    </div>
  )
}

export default Contacts