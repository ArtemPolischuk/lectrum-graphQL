// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
  const { loading, error, data } = useQuery(queryAvailablePets);

  const pets = data ? data.availablePets : null;
  console.log('data: ', data);
  console.log('pets: ', pets);
  return { loading, error, pets }
};