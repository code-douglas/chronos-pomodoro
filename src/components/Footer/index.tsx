import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a tecnica pomodoro 🍅</a>
      <a href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Desenvolvido por
        Codin.
      </a>
    </footer>
  );
}
