import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por: <b>{state.config.workTime}</b> minutos.
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por: <b>{state.config.shortBreakTime}</b> minutos.
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por: <b>{state.config.longBreakTime}</b> minutos.
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        O próximo ciclo é de <b>{state.config.workTime}</b> minutos de foco.
      </span>
    ),
    shortBreakTime: (
      <span>
        O próximo ciclo é de <b>{state.config.shortBreakTime}</b> min de
        descanço
      </span>
    ),
    longBreakTime: (
      <span>
        O próximo ciclo é de <b>{state.config.longBreakTime}</b> minutos de
        descanço
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
