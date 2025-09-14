import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_TASK = 'RESET_TASK',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLET_TASK = 'COMPLET_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
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
    }
  | {
      type: TaskActionsTypes.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    };
