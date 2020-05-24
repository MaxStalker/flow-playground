import React from "react";
import { css } from "@emotion/core";
import styled from "../util/styled";

type ItemProps = {
  active?: boolean;
  onClick?: (e: React.SyntheticEvent<Element, Event>) => any | void;
  children?: React.ReactNode;
};

export const SidebarItem = styled.div<ItemProps>`
  --active-width: 6px;

  font-size: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  background: var(--bg);
  position: relative;

  ${p =>
    p.active &&
    css`
      background: rgba(255, 255, 255, 0.75);

      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 6px;
        bottom: 6px;
        width: 6px;
        border-radius: 0 3px 3px 0;
        background: ${p.theme.colors.primary};
      }
    `}
  ${p =>
    p.onClick &&
    css`
      cursor: pointer;
      &:hover,
      &:focus {
        background: rgba(255, 255, 255, 0.75);
      }
    `}

  display:flex;
  align-items: center;
  font-weight: bold;
  color: ${props => props.theme.colors.muted};

  & .avatar {
    margin-right: 1rem;
    width: 35px;
    height: 35px;
    border-radius: 0 0 20px 20px;
  }

  & small,
  & .mute {
    font-weight: normal;
    color: ${props => props.theme.colors.heading};
    font-size: 13px;
  }
`;
