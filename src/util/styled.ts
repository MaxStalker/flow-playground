import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
  colors: {
    primary: string;
    background: string;
    text: string;
    muted: string;
    grey: string;
    greyBorder: string;
    purple: string;
    border: string;
    brightBorder: string;
    borderDark: string;
    shadowColor: string;
    error: string;
    blue: string;
    heading: string;
    editorMargin: string;
    activeListItem: string;
    activeListItemLabel: string;
    listBackground: string;
    storageBackground: string;
    deploymentContainerBackground: string;
    stateContainerBackground: string;
    logoLetters: string;
  };
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontSizes: Array<string>;
  buttons: {
    primary: {
      [key: string]: string;
    };
    disabled: {
      [key: string]: string;
    };
    secondary: {
      [key: string]: string | {};
      '&:hover': {
        background: string;
        color: string;
      };
    };
  };
};

export default styled as CreateStyled<Theme>;
