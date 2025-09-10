import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type availableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as availableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function HandleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        href='/'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        href='/history'
        className={styles.menuLink}
        aria-label='Ir para o historico'
        title='Ver historico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Ir para as configurações'
        title='Ir para configurações do app'
      >
        <SettingsIcon />
      </RouterLink>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={HandleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
