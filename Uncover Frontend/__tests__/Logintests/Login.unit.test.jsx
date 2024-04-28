import { fireEvent } from '@testing-library/react';
import Login from '../../src/Pages/Login';

test('handleChange updates formData correctly', () => {
  const { getByLabelText } = render(<Login />);
  const emailInput = getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');
});

// Write similar tests for other input fields and handleChange function

test('handleSubmit function submits form with valid data', async () => {
  // Mock necessary dependencies like dispatch and navigate functions
  const mockedDispatch = jest.fn();
  const mockedNavigate = jest.fn();
  useDispatch.mockReturnValue(mockedDispatch);
  useNavigate.mockReturnValue(mockedNavigate);

  const { getByLabelText, getByText } = render(<Login />);
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  fireEvent.click(getByText('Login'));

  // Add assertions here to verify the expected behavior after form submission
});
