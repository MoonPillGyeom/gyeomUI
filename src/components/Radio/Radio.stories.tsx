import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio'; // 위에서 작성한 Radio 컴포넌트를 불러옵니다.
// storybook build 이후 chromatic으로 배포 테스트
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

// 기본 예시: 기본 라디오 그룹과 라디오 아이템들
// const Template: Story = (args) => {
//   const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

//   return (
//     <Radio {...args}>
//       <Radio.Label>Choose your favorite color</Radio.Label>
//       <Radio.Item value="red">Red</Radio.Item>
//       <Radio.Item value="blue">Blue</Radio.Item>
//       <Radio.Item value="green">Green</Radio.Item>
//     </Radio>
//   );
// };

// export const Default = Template.bind({});
// Default.args = {
//   name: 'color',
//   defaultValue: 'blue',
// };

// // onChange 콜백을 이용한 예시
// export const WithOnChange = Template.bind({});
// WithOnChange.args = {
//   name: 'color',
//   defaultValue: 'red',
//   onChange: (value: string) => {
//     alert(`Selected value: ${value}`);
//   },
// };

// // 기본값이 없는 예시
// export const WithoutDefaultValue = Template.bind({});
// WithoutDefaultValue.args = {
//   name: 'color',
//   children: (
//     <>
//       <Radio.Label>Choose your favorite fruit</Radio.Label>
//       <Radio.Item value="apple">Apple</Radio.Item>
//       <Radio.Item value="banana">Banana</Radio.Item>
//       <Radio.Item value="cherry">Cherry</Radio.Item>
//     </>
//   ),
// };
