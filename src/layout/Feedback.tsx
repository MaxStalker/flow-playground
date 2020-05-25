import styled from "../util/styled";

export const Feedback = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 179px;
  border-top: ${p => `1px solid ${p.theme.colors.border}`};
`;
