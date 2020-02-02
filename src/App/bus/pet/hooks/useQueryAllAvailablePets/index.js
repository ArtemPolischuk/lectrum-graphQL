// Core
import { loader } from 'graphql.macro';
import { useQuery} from '@apollo/react-hooks';

// Queries
const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql');

export const useQueryAllAvailablePets = () => {
  const { loading, error, data } = useQuery(queryAllAvailablePets);

  const pets = data ? data.allAvailablePets : null;

  return { loading, error, pets }
};