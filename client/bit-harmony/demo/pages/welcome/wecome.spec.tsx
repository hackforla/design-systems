import React from 'react';
import { render } from '@testing-library/react';
import { WelcomePage } from './welcome.composition';

it('should render correct Heading', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText('Welcome to Bit');
  expect(rendered).toBeTruthy();
});

it('should render correct text', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText(
    'Edit this component and see it change in the UI or play with the commands below to learn more about how Bit works.'
  );
  expect(rendered).toBeTruthy();
});

it('should render some cards', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText('Docs');
  expect(rendered).toBeTruthy();
});

it('should render another heading', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText('Bit CLI');
  expect(rendered).toBeTruthy();
});

it('should render another text', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText("Understanding Bit's Commands");
  expect(rendered).toBeTruthy();
});

it('should render some more cards', () => {
  const { getByText } = render(<WelcomePage />);
  const rendered = getByText('Templates');
  expect(rendered).toBeTruthy();
});
