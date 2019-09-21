import { configure } from '@storybook/react';
import '../src/styles/index.css';

import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-jss-theme';
import theme from "../src/theme.js";

const defaultTheme = {
  name: "Default",
  variables: { ...theme }
}

const customTheme = {
  name: "Custom",
  variables: {
    palette: {
      primary: {
        main: "#99CC66",
        text: "#FFF"
      },
      disabled: theme.palette.disabled
    },
    borderRadius: "5px 15px 15px 5px",
    spacing: 10
  }
}

addDecorator(withThemesProvider([defaultTheme, customTheme]));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
