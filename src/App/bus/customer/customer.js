// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomer } from './hooks/useCustomer';

export const Customer = () => {
  const { handleChange, save, createdAccount } = useCustomer();

  const customerJSX = createdAccount && (
    <>
      we already created account with name: { createdAccount.username }
    </>
  );

  return (
    <>
      <Link to='/login'>
        <span>Login</span>
      </Link>
      <h1>Registration</h1>
      <input type="text" placeholder="name" onChange={handleChange}  name="name"/>
      <input type="text" placeholder="username" onChange={handleChange}  name="username"/>
      <input type="password" placeholder="password" onChange={handleChange}  name="password"/>
      <button type="submit" onClick={save}>Save</button>
      { customerJSX }
    </>
  );
};
