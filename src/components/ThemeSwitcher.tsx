'use client';

import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isMode, setIsMode] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsMode(
      savedMode || window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }, []);

  useEffect(() => {
    if (isMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isMode, setTheme]);

  if (!mounted) return null;
  const toggleMode = () => {
    setIsMode(!isMode);
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="m-2">
      The current theme is: {resolvedTheme}
      <Switch className="m-2" onClick={toggleMode}>
        {resolvedTheme === 'light'
          ? 'Switch to Dark Mode'
          : 'Switch to Light Mode'}
      </Switch>
    </div>
  );
}
