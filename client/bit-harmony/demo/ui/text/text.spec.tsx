import React from 'react';
import { render } from '@testing-library/react';
import { BasicText } from './text.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicText />);
  const rendered = getByText('hello from Text');
  expect(rendered).toBeTruthy();
});
