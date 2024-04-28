

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from  '../../src/Pages/SignUp';
import test from 'node:test';

describe('SignUp component unit tests', () => {
  test('should update form state on input change', () => {
    const { getByLabelText } = render(<SignUp />);
    const firstNameInput = getByLabelText('First name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
  });

  test('should set validation errors when form is submitted with invalid data', async () => {
    const { getByText, getByLabelText } = render(<SignUp />);
    const submitButton = getByText('Create my Uncover Account');
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(getByText('First name is required')).toBeInTheDocument();
      expect(getByText('Last name is required')).toBeInTheDocument();
      expect(getByText('Username is required')).toBeInTheDocument();
      expect(getByText('Email is required')).toBeInTheDocument();
      expect(getByText('Password is required')).toBeInTheDocument();
      expect(getByText('Confirm password is required')).toBeInTheDocument();
    });
  });

  test('should submit form successfully with valid data', async () => {
    const { getByText, getByLabelText } = render(<SignUp />);
    const firstNameInput = getByLabelText('First name');
    const lastNameInput = getByLabelText('Last name');
    const usernameInput = getByLabelText('Username');
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm password');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });

    const submitButton = getByText('Create my Uncover Account');
    fireEvent.click(submitButton);

    // Add assertions here to check if form submission is successful
  });

  test('should display error message on form submission failure', async () => {
    // Mocking the signup function to simulate a failed request
    jest.spyOn(window, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Server error' }),
      })
    );

    const { getByText, getByLabelText } = render(<SignUp />);
    const submitButton = getByText('Create my Uncover Account');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(getByText('Server error')).toBeInTheDocument();
    });

    jest.restoreAllMocks(); 
  });
});
