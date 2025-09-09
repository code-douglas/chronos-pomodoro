import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>
        Entenda como funciona a tecnica pomodoro 🍅
      </Link>
      <a href='https://github.com/code-douglas' target='_blank'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Desenvolvido por
        Codin.
      </a>
    </footer>
  );
}
