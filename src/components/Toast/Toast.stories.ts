import { Meta, StoryObj } from "@storybook/react/*";
import Toast from "./Toast";

const meta = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: 'Toast message는 3초 동안 보여집니다.',
    duration: 3000,
    onClose: () => {}
  } 
}