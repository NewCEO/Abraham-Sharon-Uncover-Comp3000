import { User } from "../model/user";

// Define action types as string constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Define action creators with TypeScript types
export const login = (userData: User) => ({
  type: LOGIN as typeof LOGIN, // Ensures type safety by assigning the correct string literal type
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT as typeof LOGOUT, // Ensures type safety by assigning the correct string literal type
});
