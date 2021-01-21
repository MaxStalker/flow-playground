import React from 'react';
import baseTheme from '../theme';
import monokaiBrightTheme from '../monokai-bright.theme';
import {
  monokaiBright as monokaBrightEditorTheme,
  flowTheme as baseCadenceEditorTheme,
} from '../themeList';

export const mapTheme = (themeName: string) => {
  switch (themeName) {
    case 'Dark - Monokai Bright': {
      return monokaiBrightTheme;
    }
    default:
      return baseTheme;
  }
};

export const mapEditorTheme = (themeName: string) => {
  switch (themeName) {
    case 'Dark - Monokai Bright': {
      return monokaBrightEditorTheme;
    }
    default:
      return baseCadenceEditorTheme;
  }
};

type ThemeContextType = {
  activeTheme: string;
  setTheme: (name: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>({
  activeTheme: 'Flow Theme',
  setTheme: () => {},
});

export default ThemeContext;
