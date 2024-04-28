import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Library from '../../src/Pages/Listener/Library';
import { BrowserRouter as Router } from 'react-router-dom';
import { playlistService } from '../../service/playlistService'



const mockUser = {
  username: 'testuser',
  access_token: 'testtoken',
};

jest.mock('../../service/playlistService', () => ({
  getAllPlaylists: jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([
      { name: 'Playlist 1' },
      { name: 'Playlist 2' },
    ]),
  }),
}));

test('renders Library component and fetches playlists', async () => {
  render(
    <Router>
      <Library handleLogout={() => {}} />
    </Router>
  );

  // Wait for component to render
  await waitFor(() => screen.getByText('My Library'));

  // Check if playlists are fetched and rendered
  expect(screen.getByText('Playlist 1')).toBeInTheDocument();
  expect(screen.getByText('Playlist 2')).toBeInTheDocument();
});
