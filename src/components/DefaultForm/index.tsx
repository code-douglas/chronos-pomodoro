import styles from './styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
export function DefaultForm() {
  return (
    <form action='' className={styles.form}>
      <div className={styles.formControl}>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Task:'
          placeholder='O que deseja fazer?'
        />
      </div>
      <div className={styles.formControl}>
        <p>O próximo intervalo é de 25 min</p>
      </div>
      <div className={styles.formControl}>
        <Cycles />
      </div>
      <div className={styles.formControl}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
