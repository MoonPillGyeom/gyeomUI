import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta = {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    images: ["CarouselMain", "Carousel2", "Carousel3", "Carousel4", "Carousel5"],
  },
};