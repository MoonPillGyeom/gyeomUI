import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import "../../../src/styles/globals.css"

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'secondary',
type: 'button',
children: 'click me',
className: 'text-white bg-blue-500 p-4',
  },
};

export const Secondary: Story = {
  args: {
    className: 'p-4 bg-blue-500 text-white',
    type: 'button',
    children: 'click me'
  },
};

export const Large: Story = {
  args: {
    style: {backgroundColor: 'red'},
    className: '',
    type: 'button',
    children: 'click me'
  },
};

export const Small: Story = {
  args: {
    className: 'btn btn-primary',
    type: 'button',
    children: 'click me'
  },
};
