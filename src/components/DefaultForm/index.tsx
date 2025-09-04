import styles from './styles.module.css';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function DefaultForm() {
  const { state, dispatch } = useTaskContext();
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
      durationInMinutes: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <h1></h1>
      <div className={styles.formControl}>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Tarefa'
          placeholder='O que deseja fazer?'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className={styles.formControl}>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className={styles.formControl}>
          <Cycles />
        </div>
      )}

      <div className={styles.formControl}>
        {!state.activeTask && (
          <DefaultButton
            icon={<PlayCircleIcon />}
            type='submit'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            key='submit_button'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            icon={<StopCircleIcon />}
            type='button'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            color='red'
            onClick={handleInterruptTask}
            key='button_button'
          />
        )}
      </div>
    </form>
  );
}
