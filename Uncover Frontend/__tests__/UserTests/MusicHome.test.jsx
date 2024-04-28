
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MusicHome from '../../src/Pages/Listener/MusicHome';

describe('MusicHome component integration tests', () => {
  test('should render MusicHeader, MusicMain, Sidebar, and SongBar components', () => {
    const { getByText } = render(
      <Router>
        <MusicHome />
      </Router>
    );

    expect(getByText('Logout')).toBeInTheDocument(); // MusicHeader
    expect(getByText('Welcome to Uncover Music')).toBeInTheDocument(); // MusicMain
    expect(getByText('Explore Artists')).toBeInTheDocument(); // Sidebar
    expect(getByText('Now Playing:')).toBeInTheDocument(); // SongBar
  });

  test('should toggle mobile menu and render links', () => {
    const { getByText, queryByText } = render(
      <Router>
        <MusicHome />
      </Router>
    );

    fireEvent.click(getByText('☰')); // Open mobile menu
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Explore')).toBeInTheDocument();
    expect(getByText('My Library')).toBeInTheDocument();

    fireEvent.click(getByText('×')); // Close mobile menu
    expect(queryByText('Home')).not.toBeInTheDocument();
  });
  describe('MusicHome component integration tests', () => {
    test('should render MusicHeader, MusicMain, Sidebar, and SongBar components', () => {
      const { getByText } = render(
        <Router>
          <MusicHome />
        </Router>
      );
  
      expect(getByText('Logout')).toBeInTheDocument(); // MusicHeader
      expect(getByText('Welcome to Uncover Music')).toBeInTheDocument(); // MusicMain
      expect(getByText('Explore Artists')).toBeInTheDocument(); // Sidebar
      expect(getByText('Now Playing:')).toBeInTheDocument(); // SongBar
    });
  
    test('should toggle mobile menu and render links', () => {
      const { getByText, queryByText } = render(
        <Router>
          <MusicHome />
        </Router>
      );
  
      fireEvent.click(getByText('☰')); // Open mobile menu
      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('Explore')).toBeInTheDocument();
      expect(getByText('My Library')).toBeInTheDocument();
  
      fireEvent.click(getByText('×')); // Close mobile menu
      expect(queryByText('Home')).not.toBeInTheDocument();
    });
  
    test('should navigate to different pages when clicking on sidebar links', () => {
      const { getByText, getByTestId } = render(
        <Router>
          <MusicHome />
        </Router>
      );
  
      fireEvent.click(getByText('Explore Artists')); // Click on Explore link
      expect(getByTestId('explore-page')).toBeInTheDocument(); // Ensure Explore page is rendered
  
      fireEvent.click(getByText('Home')); // Click on Home link
      expect(getByTestId('home-page')).toBeInTheDocument(); // Ensure Home page is rendered
  
      fireEvent.click(getByText('My Library')); // Click on My Library link
      expect(getByTestId('library-page')).toBeInTheDocument(); // Ensure My Library page is rendered
    });
});
});
