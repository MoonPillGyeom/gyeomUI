import type { Meta } from "@storybook/react";
import Carousel from "./Carousel";
// import Test from "../../assets/test.jpeg"
// import Test2 from "../../assets/test2.jpeg"
// import Test3 from "../../assets/test3.jpeg"
// import Test4 from "../../assets/test4.jpeg"

const meta = {
  title: "Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta

// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     images: [`${Test}`, Test2, Test3, Test4]
//   },
// };