// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth';

export const LogIn = () => {
  const { handleChange, logIn, response: { data, error, loading } } = useCustomerAuth();

  if(loading) {
    return (
      <p>Идет проверка пользователя...</p>
    )
  }

  const errorJSX = error && (
    <p>Неверное имя или пароль</p>
  );

  const authorizedCustomerJSX = data && (
    <p>Добро пожаловать !</p>
  );

  return (
    <>
      <Link to='/register'>
        <span>Register</span>
      </Link>
      <h1>Login</h1>
      <input type="text" onChange={handleChange} placeholder="username" name="username" />
      <input type="password" onChange={handleChange} placeholder="password" name="password" />
      <button type="submit" onClick={logIn}>Login</button>
      {errorJSX}
      {authorizedCustomerJSX}
      <Link to='/'>
        <p>Back</p>
      </Link>
    </>
  )
};