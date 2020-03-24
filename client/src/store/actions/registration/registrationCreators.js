import { REGISTER_USER } from './registrationTypes';

export const registerUserCreator = user => ({
    type: REGISTER_USER,
    user
  });