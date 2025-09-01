import styles from './styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function DefaultForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      durationInMinutes: 1,
      type: nextCycleType,
    };

    const secondsRemainingVariable = newTask.durationInMinutes * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemainingVariable,
        formattedSecondsRemaining: '00:00', // Conferir depois.
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <h1></h1>
      <div className={styles.formControl}>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Tarefa:'
          placeholder='O que deseja fazer?'
          ref={taskNameInput}
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
