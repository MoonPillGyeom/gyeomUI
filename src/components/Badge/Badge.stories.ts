import { Meta, StoryObj } from "@storybook/react/*";
import Badge from "./Badge";

const meta = {
  title: 'Badge',
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  }, 
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: "Badge",
  }
}

export const Secondary: Story = {
  args: {
    children: "Badge2",
    variant: 'secondary',
  }
}

export const SecondarySmall: Story = {
  args: {
    children: "badge",
    variant: 'secondarySmall',
  }
}

export const SecondarySmallSquare: Story = {
  args: {
    children: "badge",
    variant: 'secondarySmallSquare',
  }
}