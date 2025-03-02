import type { Preview } from "@storybook/react";

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
