import styles from './styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';

export function DefaultForm() {
  const [taskName, setTaskName] = useState('');

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <div className={styles.formControl}>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Tarefa:'
          placeholder='O que deseja fazer?'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>
      <div className={styles.formControl}>
        <p>Sem tarefas por enquanto.</p>
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
