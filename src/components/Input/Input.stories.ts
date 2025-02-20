import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "search",
    label: "검색",
    errorMessage: "",
    type: "text",
  },
};

export const Error: Story = {
  args: {
    id: "email",
    label: "이메일",
    errorMessage: "이메일을 입력해주세요",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    id: "password",
    label: "비밀번호",
    type: "password",
  },
};
