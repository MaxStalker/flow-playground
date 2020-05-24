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
    borderDark: string;
    shadowColor: string;
    error: string;
    blue: string;
    heading: string;
  };
};

export default styled as CreateStyled<Theme>;
