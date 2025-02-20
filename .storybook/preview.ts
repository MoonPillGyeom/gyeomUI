import type { Preview } from "@storybook/react";
import { fn } from '@storybook/test'; // fn 함수 임포트

const preview: Preview = {
  parameters: {
    actions: {
      handles: ['onClick', 'onChange'],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
