
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CreatorProfile from '../../src/Pages/Creator/CreatorProfile';
import {configureStore } from 'redux'; 

// Mocking Redux store
const store = configureStore(() => ({
  auth: { user: { user: { id: 123 }, access_token: 'test_token' } },
}));

describe('CreatorProfile component tests', () => {
  test('should render "Edit Profile" button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CreatorProfile />
      </Provider>
    );
    expect(getByText('Edit Profile')).toBeInTheDocument();
  });

});
