import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Button - First Iteration ',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Click me',
  disabled: false,
  variant: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click me',
  disabled: false,
  variant: 'secondary',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Click me',
  disabled: false,
  variant: 'primary',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Click me',
  disabled: false,
  variant: 'primary',
  size: 'sm',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Click me',
  disabled: true,
  variant: 'primary',
  size: 'md',
};
