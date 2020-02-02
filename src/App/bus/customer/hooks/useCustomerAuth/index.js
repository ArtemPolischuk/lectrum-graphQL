// Core
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

// Mutations
const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
  const [_logIn, response ] = useMutation(mutationLogIn, { errorPolicy: 'ignore' });
  const { form, handleChange } = useForm({
    username: '',
    password: ''
  });

  console.log('response: ', response);
  const token = response.data && response.data.logIn.token;

  if (token) {
    localStorage.setItem('token', token);
  }

  const logIn = async () => {
    try {
      await _logIn({
        variables: form
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return {
    handleChange,
    response,
    logIn,
  }
};
