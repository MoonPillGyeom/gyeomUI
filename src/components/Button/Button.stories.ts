import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    type: 'button',
    children: 'click me',
    className: 'primaryBtn',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    type: 'button',
    children: 'click me'
  },
};

export const danger: Story = {
  args: {
    variant: 'danger',
    size: 'default',
    type: 'button',
    children: 'dangerBtn',
  }
}
