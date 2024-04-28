import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Explore from '../Explore';

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

describe('Explore component integration tests', () => {
  test('renders Explore component with covers and logout functionality', async () => {
    render(
      <Router>
        <Provider store={store}>
          <Explore />
        </Provider>
      </Router>
    );

    // Wait for covers to load
    await waitFor(() => screen.getByText('Explore'));

    // Check if Explore section is rendered
    expect(screen.getByText('Explore')).toBeInTheDocument();

    // Check if song cards are rendered
    const songCards = screen.getAllByTestId('song-card');
    expect(songCards.length).toBeGreaterThan(0);

    // Check if logout button is rendered
    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument();

    // Mock the logout action
    store.dispatch = jest.fn();

    // Click on logout button
    fireEvent.click(logoutButton);

    // Check if logout action is dispatched
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});

