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
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderWidth: "2px",
          borderColor: "red",
          backgroundColor: "yellow",
        }} // use this for global decoratos because tailwindcss was having bug
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
