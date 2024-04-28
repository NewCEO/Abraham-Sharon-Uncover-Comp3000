

import React from 'react';
import { render } from '@testing-library/react';
import CreatorProfile from '../../src/Pages/Creator/CreatorProfile';

describe('CreatorProfile component unit tests', () => {
  test('should display "N/A" for artist name when profile data is not available', () => {
    const { getByText } = render(<CreatorProfile />);
    expect(getByText('Artiste Name').nextElementSibling.textContent).toBe('N/A');
  });

  test('should display "N/A" for bio when profile data is not available', () => {
    const { getByText } = render(<CreatorProfile />);
    expect(getByText('Bio').nextElementSibling.textContent).toBe('N/A');
  });

  test('should display "N/A" for cover categories when profile data is not available', () => {
    const { getByText } = render(<CreatorProfile />);
    expect(getByText('Cover Category').nextElementSibling.textContent).toBe('N/A');
  });

  test('should display "N/A" for genres when profile data is not available', () => {
    const { getByText } = render(<CreatorProfile />);
    expect(getByText('Genre').nextElementSibling.textContent).toBe('N/A');
  });

  test('should display "Edit Profile" button', () => {
    const { getByText } = render(<CreatorProfile />);
    expect(getByText('Edit Profile')).toBeInTheDocument();
  });


});
