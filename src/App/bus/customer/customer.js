// Core
import React from 'react';
import { useCustomer } from './hooks/useCustomer';

export const Customer = (props) => {
  const { handleChange, save, createdAccount } = useCustomer();

  console.log('createdAccount: ', createdAccount);
  const customerJSX = createdAccount && (
    <>
      we already created account with name: { createdAccount.name }
    </>
  );

  return (
    <>
      <h1>Registration</h1>
      <input type="text" placeholder="name" onChange={handleChange}  name="name"/>
      <input type="text" placeholder="username" onChange={handleChange}  name="username"/>
      <input type="password" placeholder="password" onChange={handleChange}  name="password"/>
      <button type="submit" onClick={save}>Save</button>
      { customerJSX }
    </>
  );
};
