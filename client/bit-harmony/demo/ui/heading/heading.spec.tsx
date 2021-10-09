import React from 'react';
import { render } from '@testing-library/react';
import {
  H1DefaultHeading,
  H2Heading,
  H3Heading,
  H4Heading,
  H5Heading,
  H6Heading
} from './heading.composition';

it('should render H1 heading', () => {
  const { getByText } = render(<H1DefaultHeading />);
  const rendered = getByText('H1 Heading');
  expect(rendered).toBeTruthy();
});

it('should render H2 heading', () => {
  const { getByText } = render(<H2Heading />);
  const rendered = getByText('H2 Heading');
  expect(rendered).toBeTruthy();
});

it('should render H3 heading', () => {
  const { getByText } = render(<H3Heading />);
  const rendered = getByText('H3 Heading');
  expect(rendered).toBeTruthy();
});

it('should render H4 heading', () => {
  const { getByText } = render(<H4Heading />);
  const rendered = getByText('H4 Heading');
  expect(rendered).toBeTruthy();
});

it('should render H5 heading', () => {
  const { getByText } = render(<H5Heading />);
  const rendered = getByText('H5 Heading');
  expect(rendered).toBeTruthy();
});

it('should render H6 heading', () => {
  const { getByText } = render(<H6Heading />);
  const rendered = getByText('H6 Heading');
  expect(rendered).toBeTruthy();
});
