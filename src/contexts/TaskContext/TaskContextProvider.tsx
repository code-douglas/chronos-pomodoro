import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkManager } from '../../workers/timerWorkerManage';
import { TaskActionsTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';

export type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  const worker = TimerWorkManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({
        type: TaskActionsTypes.COMPLET_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
