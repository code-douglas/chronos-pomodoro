import { createContext } from 'react';
import { initialTaskState } from './initialTaskState';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionsModel } from './taskActions';

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionsModel>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
