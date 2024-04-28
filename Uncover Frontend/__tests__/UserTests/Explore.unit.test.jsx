
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Explore from '../Explore';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { logout } from '../../actions/accountActions';
import { coverService } from '../../service/coverService';

jest.mock('../../service/coverService'); // Mocking the coverService module

describe('Explore component unit tests', () => {
  const initialState = {
    auth: {
      user: {
        access_token: 'fake-access-token',
      },
    },
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('should render loading indicator while fetching covers', async () => {
    coverService.getAllCovers.mockResolvedValueOnce([]); // Mock the API call to return empty array

    render(
      <Router>
        <Provider store={store}>
          <Explore />
        </Provider>
      </Router>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument(); // Check if loading indicator is rendered
    await waitFor(() => expect(coverService.getAllCovers).toHaveBeenCalledTimes(1)); // Ensure the API call is made
  });

  test('should render covers after fetching data', async () => {
    const mockCovers = [
      { id: 1, song_name: 'Song 1', artist_name: 'Artist 1', art: 'cover1.jpg' },
      { id: 2, song_name: 'Song 2', artist_name: 'Artist 2', art: 'cover2.jpg' },
    ];
    coverService.getAllCovers.mockResolvedValueOnce(mockCovers); // Mock the API call to return covers data

    render(
      <Router>
        <Provider store={store}>
          <Explore />
        </Provider>
      </Router>
    );

    await waitFor(() => expect(coverService.getAllCovers).toHaveBeenCalledTimes(1)); // Ensure the API call is made

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument(); // Loading indicator should not be rendered
    expect(screen.getByText('Explore')).toBeInTheDocument(); // Ensure Explore section is rendered
    expect(screen.getAllByTestId('song-card')).toHaveLength(mockCovers.length); // Ensure correct number of song cards are rendered
  });

  test('should log out when clicking on logout button', async () => {
    coverService.getAllCovers.mockResolvedValueOnce([]); // Mock the API call to return empty array

    render(
      <Router>
        <Provider store={store}>
          <Explore />
        </Provider>
      </Router>
    );

    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument(); // Check if logout button is rendered

    store.dispatch = jest.fn(); // Mock the dispatch function

    await waitFor(() => fireEvent.click(logoutButton)); // Click on logout button

    expect(store.dispatch).toHaveBeenCalledWith(logout()); // Ensure logout action is dispatched
  });
});

