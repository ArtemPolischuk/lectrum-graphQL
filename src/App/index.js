// Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Redirect, Route, Switch } from 'react-router-dom';
// Components
import { Pet } from './bus/pet';
import { Customer, List, LogIn } from './bus/customer';
import { HW } from './components/HW';

// Other
import { client } from './init/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path='/hw' component={HW}/>
        <Route exact path='/hw1' component={List}/>
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/register' component={Customer}/>
        <Route exact path='/hw3' component={Pet}/>
        <Redirect exact path="/" to="/hw"/>
      </Switch>
    </ApolloProvider>
  )
};