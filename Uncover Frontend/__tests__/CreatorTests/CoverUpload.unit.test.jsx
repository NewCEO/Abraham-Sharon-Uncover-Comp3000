
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CoverUpload from '../../src/Pages/Creator/CoverUpload';

describe('CoverUpload component unit tests', () => {
  test('should update form state on input change', () => {
    const { getByLabelText } = render(<CoverUpload />);
    const songNameInput = getByLabelText('Original Song Name');
    fireEvent.change(songNameInput, { target: { value: 'Test Song' } });
    expect(songNameInput.value).toBe('Test Song');
  });

  test('should display selected file name when file input changes', () => {
    const { getByLabelText, getByText } = render(<CoverUpload />);
    const artFileInput = getByLabelText('Cover art');
    fireEvent.change(artFileInput, {
      target: { files: [new File(['test.jpg'], 'test.jpg', { type: 'image/jpeg' })] },
    });
    expect(getByText('Selected File: test.jpg')).toBeInTheDocument();
  });d
});
