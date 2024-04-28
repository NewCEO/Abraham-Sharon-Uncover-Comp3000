import { AuthState, User } from "../model/user";

const initialState: AuthState = {
    user: null,
  };
  type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

  const accountReducer = (state = initialState, action:Action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default accountReducer;