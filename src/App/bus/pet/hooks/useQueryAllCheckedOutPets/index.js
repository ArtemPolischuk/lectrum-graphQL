// Core
import { loader } from 'graphql.macro';
import { useQuery} from '@apollo/react-hooks';

// Queries
const queryAllCheckedOutPets = loader('./gql/queryAllCheckedOutPets.graphql');

export const useQueryAllCheckedOutPets = () => {
  const { loading, error, data } = useQuery(queryAllCheckedOutPets);

  const pets = data ? data.allCheckedOutPets : null;

  return { loading, error, pets }
};