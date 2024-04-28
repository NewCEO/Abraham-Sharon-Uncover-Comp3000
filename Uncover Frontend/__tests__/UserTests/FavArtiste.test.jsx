// FavArtiste.integration.test.tsx

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FavArtiste from '../../src/Pages/Listener/FavArtiste';
import { BrowserRouter as Router } from 'react-router-dom';

const mockUser = {
  username: 'testuser',
};

test('renders FavArtiste component and continues with selected artists', async () => {
  render(
    <Router>
      <FavArtiste user={mockUser} />
    </Router>
  );

  // Wait for component to render
  await waitFor(() => screen.getByText('Choose your Favorite Artiste'));

  // Check if continue button is initially disabled
  const continueButton = screen.getByText('Continue');
  expect(continueButton).toBeDisabled();

  // Select an artist
  const artistName = 'Artist Name';
  const artistImage = screen.getByAltText(artistName);
  fireEvent.click(artistImage);

  // Check if selected count is updated
  const selectedCountText = screen.getByText('Selected: 1');
  expect(selectedCountText).toBeInTheDocument();

  // Check if continue button is enabled after selecting an artist
  expect(continueButton).not.toBeDisabled();

  // Click continue button
  fireEvent.click(continueButton);

  // Check if the user is redirected to music home
  await waitFor(() => expect(window.location.pathname).toBe('/music-home'));
});
