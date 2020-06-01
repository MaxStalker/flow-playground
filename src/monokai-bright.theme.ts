import base from './theme';
import { extractTokenColors } from 'util/theme';
const theme = require('monaco-themes/themes/Monokai.json');

const tokenColors = extractTokenColors(theme.rules);

const whitespace = theme.colors['editorWhitespace.foreground'];
const white = '#fff';
const text = '#ddd';
const muted = '#aaa';
const primary = `#${tokenColors['keyword']}`;
const background = `${theme.colors['editor.background']}`;
const heading = `#${tokenColors['string']}`;
const editorMargin = `${whitespace}3d`;
const activeListItem = `${whitespace}85`;
const activeListItemLabel = muted;
const deploymentContainerBackground = background;
const stateContainerBackground = background;
const storageBackground = background;
const border = whitespace;
const brightBorder = '#6d6d47';
const logoLetters = white;
const activeStorageItemBackground = whitespace;

const editorColors = {
  'comment 0': '#75715e',
  'string 1': '#e6db74',
  'constant.numeric 2': '#ae81ff',
  'constant.language 3': '#ae81ff',
  'constant.character 4': '#ae81ff',
  'constant.other 5': '#ae81ff',
  'keyword 6': '#f92672',
  'storage 7': '#f92672',
  'storage.type 8': '#66d9ef',
  'entity.name.class 9': '#a6e22e',
  'entity.other.inherited-class 10': '#a6e22e',
  'entity.name.function 11': '#a6e22e',
  'variable.parameter 12': '#fd971f',
  'entity.name.tag 13': '#f92672',
  'entity.other.attribute-name 14': '#a6e22e',
  'support.function 15': '#66d9ef',
  'support.constant 16': '#66d9ef',
  'support.type 17': '#66d9ef',
  'support.class 18': '#66d9ef',
  'invalid 19': '#f8f8f0',
  'invalid.deprecated 20': '#f8f8f0',
  'meta.structure.dictionary.json string.quoted.double.json 21': '#cfcfc2',
  'meta.diff 22': '#75715e',
  'meta.diff.header 23': '#75715e',
  'markup.deleted 24': '#f92672',
  'markup.inserted 25': '#a6e22e',
  'markup.changed 26': '#e6db74',
  'constant.numeric.line-number.find-in-files - match 27': '#ae81ffa0',
  'entity.name.filename.find-in-files 28': '#e6db74',
};
console.log(editorColors);

const colors = {
  foreground: '#F8F8F2',
  background: '#272822',
  ewf: '#3B3A32',
  lineHighlightBackground: '#3E3D32',
  selectionBackground: '#49483E',
  selectionHighlightBorder: '#222218',
  //editorCursor.foreground: "#F8F8F0",
  edc: '#F8F8F0',
  //editorIndentGuide.activeBackground: "#9D550FB0",
  eiab: '#9D550FB0',
  //editorWhitespace.foreground: "#3B3A32",
};
console.log(colors);

const updatedTheme = { ...base };
updatedTheme.colors = {
  ...updatedTheme.colors,
  primary,
  background,
  heading,
  text,
  muted,
  border,
  brightBorder,
  editorMargin,
  activeListItem,
  activeListItemLabel,
  storageBackground,
  activeStorageItemBackground,
  stateContainerBackground,
  deploymentContainerBackground,
  logoLetters,
};

updatedTheme.buttons.primary.color = white;
updatedTheme.buttons.secondary = {
  ...updatedTheme.buttons.secondary,
  '&:hover': {
    background: activeListItem,
    color: 'text',
  },
};

export default updatedTheme;
