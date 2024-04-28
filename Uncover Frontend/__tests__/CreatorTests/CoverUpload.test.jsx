// CoverUpload.test.tsx

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import CoverUpload from '../../src/Pages/Creator/CoverUpload';
import { configureStore} from 'redux'; // Import your Redux store setup

// Mocking Redux store
const store = configureStore(() => ({
  auth: { user: { user: { id: 123 }, access_token: 'test_token' } },
}));

describe('CoverUpload component tests', () => {
  test('should update form state on input change', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <CoverUpload />
      </Provider>
    );
    const songNameInput = getByLabelText('Original Song Name');
    fireEvent.change(songNameInput, { target: { value: 'Test Song' } });
    expect(songNameInput.value).toBe('Test Song');
  });

  test('should display selected file name when file input changes', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <CoverUpload />
      </Provider>
    );
    const artFileInput = getByLabelText('Cover art');
    fireEvent.change(artFileInput, {
      target: { files: [new File(['test.jpg'], 'test.jpg', { type: 'image/jpeg' })] },
    });
    expect(getByText('Selected File: test.jpg')).toBeInTheDocument();
  });

});
