import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio'; // 위에서 작성한 Radio 컴포넌트를 불러옵니다.
const meta = {
  title: 'Radio',
  component: Radio,
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const test: Story = {
  args: {
    name: 'color',
    defaultValue: 'blue',
    children: (
      <>
        <Radio.Label>Choose your favorite color</Radio.Label>
        <Radio.Item value="red">Red</Radio.Item>
        <Radio.Item value="blue">Blue</Radio.Item>
        <Radio.Item value="green">Green</Radio.Item>
      </>
    ),
  },
};

export const defaultRadio: Story = {
  args: {
    onchange: (value: string) => {
      console.log(value)
    },
    name: 'animals',
    defaultValue: 'Cat',
    children: (
      <>
        <Radio.Label>Choose your favorite animal</Radio.Label>
        <Radio.Item value="Monkey">Monkey</Radio.Item>
        <Radio.Item value="Pig">Pig</Radio.Item>
        <Radio.Item value="Cat">Cat</Radio.Item>
      </>
    ),
  },
};