

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ArtistItem from '../../src/constants/Artiste';

test('renders ArtistItem component with correct name and image', () => {
  const name = 'Artist Name';
  const image = 'artist_image.png';
  const selected = false;
  const toggleSelected = jest.fn();

  const { getByAltText, getByText } = render(
    <ArtistItem name={name} image={image} selected={selected} toggleSelected={toggleSelected} />
  );

  const artistImage = getByAltText(name);
  expect(artistImage).toBeInTheDocument();
  expect(artistImage).toHaveAttribute('src', image);

  const artistName = getByText(name);
  expect(artistName).toBeInTheDocument();
});

test('calls toggleSelected function when artist image is clicked', () => {
  const name = 'Artist Name';
  const image = 'artist_image.png';
  const selected = false;
  const toggleSelected = jest.fn();

  const { getByAltText } = render(
    <ArtistItem name={name} image={image} selected={selected} toggleSelected={toggleSelected} />
  );

  const artistImage = getByAltText(name);
  fireEvent.click(artistImage);

  expect(toggleSelected).toHaveBeenCalledTimes(1);
});
