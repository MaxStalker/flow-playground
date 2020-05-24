import React from "react";
import styled from '../util/styled'

type SidebarItemInsertProps = {
  onClick?: (e: React.SyntheticEvent<Element, Event>) => any | void;
  grab?: boolean;
};

export const SidebarItemInsert = styled.button<SidebarItemInsertProps>`
  border: none;
  padding: 0;
  background: transparent;
  position: absolute;
  right: 0.75rem;
  top: 56%;
  transform: translateY(-50%);

  color: ${props => props.theme.colors.grey};
  &:hover {
    color: ${props => props.theme.colors.heading};
    cursor: ${p => (p.grab ? "grab" : "pointer")};
  }
  &:active {
    cursor: ${p => (p.grab ? "grabbing" : "pointer")};
  }
`;
