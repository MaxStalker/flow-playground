import base from './theme';
const theme = require('monaco-themes/themes/Monokai.json');

const primary = `#${theme.rules[1].foreground}`;

export default {
  ...base,
    colors:{
      primary
    }
};
