// Core
import React from 'react';

// Hooks
import { useQueryAllCustomers } from './hooks/useQueryAllCustomers';

export const List = () => {
  const { loading, error, customers } = useQueryAllCustomers();

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem {error.message}
      </p>
    )
  }

  const customersJSX = customers.map(({ username, name, dateCreated }) => (
    <p key={username}>
      <p>Name: {name}</p>
      <p>dateCreated: {dateCreated}</p>
    </p>
  ));

  return (
    <>
      <h1>Customers</h1>
      {customersJSX}
    </>
  )
};