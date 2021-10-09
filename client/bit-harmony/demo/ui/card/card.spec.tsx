import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard, CardWithCopyBox } from './card.composition';

it('should render a Heading', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('Self Host');
  expect(rendered).toBeTruthy();
});

it('should render some text', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('lean how to self host these components');
  expect(rendered).toBeTruthy();
});

it('should contain a command that can be copied', () => {
  const { getByText } = render(<CardWithCopyBox />);
  const rendered = getByText('bit templates');
  expect(rendered).toBeTruthy();
});
