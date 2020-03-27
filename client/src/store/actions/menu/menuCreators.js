import { REGISTER_USER } from './menuTypes';

export const registerUserCreator = user => ({
    type: REGISTER_USER,
    user
  });