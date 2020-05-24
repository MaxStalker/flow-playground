import base from './theme';
const theme = require('monaco-themes/themes/Monokai.json');

console.log({ theme });

const primary = `#${theme.rules[1].foreground}`;
const background = `${theme.colors['editor.background']}`;
const heading = '#ff00ff';
const text = '#ddd';

const colors = {
  background: '#272822',
  foreground: '#F8F8F2',
  lineHighlightBackground: '#3E3D32',
  selectionBackground: '#49483E',
  selectionHighlightBorder: '#222218',
  //editorCursor.foreground: "#F8F8F0",
  edc: '#F8F8F0',
  //editorIndentGuide.activeBackground: "#9D550FB0",
  eiab: '#9D550FB0',
  //editorWhitespace.foreground: "#3B3A32",
  ewf: '#3B3A32',
};
console.log(colors);

export default {
  ...base,
  colors: {
    primary,
    background,
    heading,
    text,
  },
};
