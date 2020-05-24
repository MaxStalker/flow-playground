import styled from '../util/styled';

export const Base = styled.div`
  --gap: 1px;
  --key: ${props => props.theme.colors.greyBorder};
  --bg: ${props => props.theme.colors.background};

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  display: grid;
  grid-gap: var(--gap) var(--gap);
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-columns: 244px auto;
  grid-template-rows: 72px auto;
  background: var(--key);
`;
