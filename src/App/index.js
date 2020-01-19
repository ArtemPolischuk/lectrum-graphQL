// Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

// Components
// import { Pet } from './bus/pet';
import { Profile } from './bus/pet/profile';
import { Customers } from './bus/customer';

// Other
import { client } from './init/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/*<Pet />*/}
      <Customers />
      {/*<Profile/>*/}
    </ApolloProvider>
  )
};