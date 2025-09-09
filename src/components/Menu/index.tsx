import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

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
      <Link
        to='/'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a home'
      >
        <HouseIcon />
      </Link>
      <Link
        to='#'
        className={styles.menuLink}
        aria-label='Ir para o historico'
        title='Ver historico'
      >
        <HistoryIcon />
      </Link>
      <Link
        to='#'
        className={styles.menuLink}
        aria-label='Ir para as configurações'
        title='Ir para configurações do app'
      >
        <SettingsIcon />
      </Link>
      <Link
        to='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={HandleThemeChange}
      >
        {nextThemeIcon[theme]}
      </Link>
    </nav>
  );
}
