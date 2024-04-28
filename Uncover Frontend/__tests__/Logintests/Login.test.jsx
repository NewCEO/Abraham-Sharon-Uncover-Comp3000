import { render, fireEvent } from '@testing-library/react';
import Login from '../../src/Pages/Login';

test('renders Login component correctly', () => {
  const { getByText, getByLabelText } = render(<Login/>);
  expect(getByText('Welcome')).toBeInTheDocument();
  expect(getByLabelText('Email')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
});

test('shows error messages on form submission with invalid data', async () => {
  const { getByText } = render(<Login />);
  fireEvent.click(getByText('Login'));
  expect(getByText('Email is required')).toBeInTheDocument();
  expect(getByText('Password is required')).toBeInTheDocument();
});


