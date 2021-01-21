import styled from 'util/styled';

export const Header = styled.div`
  grid-area: header;
  ${({ theme }) => {
    const { colors } = theme;
    const { background, border } = colors;
    return `
        background: ${background};
        border-bottom: 1px solid ${border};
    `;
  }}
`;
