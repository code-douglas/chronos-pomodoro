import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLET_TASK = 'COMPLET_TASK',
}

export type TaskActionsModel =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
      payload?: TaskModel;
    }
  | {
      type: TaskActionsTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionsTypes.COMPLET_TASK;
    }
  | {
      type: TaskActionsTypes.RESET_TASK;
    };
