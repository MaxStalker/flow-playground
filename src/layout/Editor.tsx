import styled from "../util/styled";

export const Editor = styled.div`
  border-bottom: ${p => `1px solid ${p.theme.colors.border}`};
  grid-area: editor;
  background: white;
  flex: 1;
`;
