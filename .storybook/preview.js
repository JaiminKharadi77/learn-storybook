import "../src/app/globals.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : b.id.localeCompare(a.id, undefined, { numeric: true }), // sorted in rever alphabatecial order
    },
  },
};

export default preview;
