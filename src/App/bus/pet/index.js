// Core
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import { CheckinPet } from './checkinPet';
import { CheckOutPet } from './checkOutPet';
import { PetReturned } from './petReturned';

export const Pet = () => {
  return (
    <>
      <Link to='/login'>
        <span>Login</span>
      </Link>
      <h1>Pet</h1>
      <CheckinPet/>
      <CheckOutPet/>
      <PetReturned/>
    </>
  )
}