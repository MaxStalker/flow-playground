import React from 'react';
import { Text } from 'theme-ui';
import styled from 'util/styled';

const LogoContainer = styled.svg`
  width: 40px;
  height: 40px;

  .logo-circle {
    fill: none;
    stroke: ${p => p.theme.colors.primary};
    stroke-miterlimit: 10;
    stroke-width: 27px;
  }
  .logo-letters {
    fill: ${p => p.theme.colors.logoLetters};
  }
`;

export const Logo = () => (
  <LogoContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.03 487.03">
    <g>
      <g>
        <circle className="logo-circle" cx="243.52" cy="243.52" r="230.02" />
        <polygon
          className="logo-letters"
          points="84.37 301.93 104.78 301.93 104.78 254.48 140.16 254.48 142.31 236.59 104.78 236.59 104.78 209.07 145.63 209.07 145.63 190.86 84.37 190.86 84.37 301.93"
        />
        <path
          className="logo-letters"
          d="M181.91,280.57V183.06l-19.78,4.24v95.47c0,14.16,7.6,21,23.24,21h1l2-17.42H187.1C183.22,286.39,181.91,284.92,181.91,280.57Z"
        />
        <path
          className="logo-letters"
          d="M239.42,218.36c-23.52,0-41.94,18.84-41.94,42.88,0,24.36,18,42.73,41.94,42.73s41.94-18.37,41.94-42.73C281.36,237.2,262.94,218.36,239.42,218.36ZM261,261.24c0,14.48-9.06,25-21.53,25-12.28,0-21.54-10.74-21.54-25s9.26-25.14,21.54-25.14S261,246.91,261,261.24Z"
        />
        <path
          className="logo-letters"
          d="M382.48,220.4,372.21,261c-.87,3.7-1.8,8.36-2.78,13.3-.09.46-.19.93-.28,1.39C368,270.33,366.72,265,365.68,261L354.46,220.4H335.52L324.29,261c-1.13,4.43-2.35,9.58-3.43,14.52-1-5.13-2.12-10.36-3.09-14.51L307.5,220.4H287.31l22.28,81.53h20.68l11.37-41.8c1.06-3.65,2.19-8.44,3.35-13.63,1.16,5.19,2.29,10,3.35,13.62l11.53,41.81h20.68l22.11-81.53Z"
        />
      </g>
    </g>
  </LogoContainer>
);

export const LogoText = styled(Text)`
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  color: ${p => p.theme.colors.logoLetters};
`;
