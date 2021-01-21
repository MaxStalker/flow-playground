import styled from 'util/styled';

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: settings;
  width: 300px;
  ${({ theme }) => {
    const { colors } = theme;
    const { editorMargin, border } = colors;
    return `
        background-color: ${editorMargin};
        border-left: 1px solid ${border};
    `;
  }}
`;
