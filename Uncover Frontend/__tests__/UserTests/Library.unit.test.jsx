import React from 'react';
import { render, screen } from '@testing-library/react';
import Library from '../../src/Pages/Listener/Library';
import { playlistService } from '../../service/playlistService'

// Mock the handleLogout function
const mockHandleLogout = jest.fn();

// Mock the user object
const mockUser = {
  username: 'testuser',
  access_token: 'testtoken',
};

// Mock the playlist data
const mockPlaylists = [
  { name: 'Playlist 1' },
  { name: 'Playlist 2' },
];

// Mock the playlistService
jest.mock('../../service/playlistService', () => ({
  getAllPlaylists: jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockPlaylists),
  }),
}));

describe('Library component', () => {
  beforeEach(() => {
    render(<Library handleLogout={mockHandleLogout} user={mockUser} />);
  });

  test('renders Library component with loading indicator', () => {
    const loadingIndicator = screen.getByText('Loading...');
    expect(loadingIndicator).toBeInTheDocument();
  });

  test('fetches playlists and renders them', async () => {
    // Wait for playlists to be fetched
    const playlist1 = await screen.findByText('Playlist 1');
    const playlist2 = await screen.findByText('Playlist 2');

    // Check if playlists are rendered
    expect(playlist1).toBeInTheDocument();
    expect(playlist2).toBeInTheDocument();
  });

  test('calls handleLogout function when logout button is clicked', async () => {
    // Simulate click on logout button
    const logoutButton = screen.getByText('Logout');
    logoutButton.click();

    // Check if handleLogout function is called
    expect(mockHandleLogout).toHaveBeenCalled();
  });
});
