import React, { useContext } from 'react';
import { Settings as SettingsRoot } from 'layout/Settings';
import { SidebarHeader as Header } from 'layout/SidebarHeader';
import ThemeContext from '../contexts/ThemeContext';
import { list as themeList } from '../themeList';

const Settings: React.FC = () => {
  const context = useContext(ThemeContext);
  return (
    <SettingsRoot>
      <Header>Settings</Header>
      <p>
        Current Theme: {(context && context.activeTheme) || 'Not specified'}
      </p>
      {themeList.map((themeName: string) => (
        <p key={themeName} onClick={() => context.setTheme(themeName)}>
          {themeName}
        </p>
      ))}
    </SettingsRoot>
  );
};

export default Settings;
