import styled from '../util/styled';

export const Base = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-columns: 250px auto;
  grid-template-rows: 72px auto;
  background: ${props => props.theme.colors.background};
`;
