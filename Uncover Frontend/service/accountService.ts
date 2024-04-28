import Config from '../config/config';
import { Signup } from '../model/signup';
import { LoginModel } from '../model/login';
import { User } from '../model/user';


async function signup(data: Signup) {
    let url = `${Config.API_URL}/auth/sign-up`;

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await fetch(url, requestOptions);
    return response;
}

async function login(data: LoginModel): Promise<{ response: Response; userData?: User }> {
    let url = `${Config.API_URL}/auth/sign-in`;
  
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const userData: User = await response.json();
        return { response, userData }; // Return user data along with the response
      } else {
        return { response };
      }
    } catch (error) {
      console.error('Error during login:', error);
      throw error; // Rethrow error for the caller to handle
    }
  }

export const accountService = {
    signup,
    login
}