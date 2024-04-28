

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MusicHome from '../../src/Pages/Listener/MusicHome';

describe('MusicHome component unit tests', () => {
  test('should render MusicHeader component', () => {
    const { getByText } = render(
      <Router>
        <MusicHome />
      </Router>
    );
    expect(getByText('Logout')).toBeInTheDocument();
  });

  test('should toggle mobile menu when menu icon is clicked', () => {
    const { getByRole, getByText } = render(
      <Router>
        <MusicHome />
      </Router>
    );

    fireEvent.click(getByRole('button', { name: 'HiOutlineMenu' }));
    expect(getByText('Home')).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: 'MdOutlineClose' }));
    expect(getByText('Home')).not.toBeInTheDocument();
  });

  test('should render links in mobile menu', () => {
    const { getByText } = render(
      <Router>
        <MusicHome />
      </Router>
    );

    fireEvent.click(getByText('☰'));
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Explore')).toBeInTheDocument();
    expect(getByText('My Library')).toBeInTheDocument();
  });
});
