// Core
import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

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
    <tr key={username}>
      <th>UserName :</th><td>{username}</td>
      <th>Name :</th><td>{name}</td>
      <th>dateCreated :</th><td>{dayjs(dateCreated).format('YYYY MM--DD--HH:mm:ss')}</td>
    </tr>
  ));

  return (
    <>
      <Link to='/'>
        <p>Back</p>
      </Link>
      <h1>Customers</h1>
      <table>
        <tbody>
        {customersJSX}
        </tbody>
      </table>
    </>
  )
};