import { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: '200px',
    height: '16px',
    rounded: false,
  }
};
export const Rounded: Story = {
  args: {
    width: '200px',
    height: '16px',
    rounded: true,
  }
}