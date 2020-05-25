import styled from '../util/styled';

export const Sidebar = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 250px;
  background: ${p => p.theme.colors.background};
  border-right: ${p => `1px solid ${p.theme.colors.border}`}; 
`;
