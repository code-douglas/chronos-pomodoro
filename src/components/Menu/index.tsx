import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type availableThemes = 'dark' | 'light';

export function Menu() {
  const [theme] = useState<availableThemes>('dark');

  function HandleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para o historico'
        title='Ver historico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para as configurações'
        title='Ir para configurações do app'
      >
        <SettingsIcon />
      </a>
      <a
        href=''
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={HandleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
