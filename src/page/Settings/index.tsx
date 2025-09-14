import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = 'Configurações';
  }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para todos os campos.');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco.');
    }

    if (shortBreakTime < 1 || shortBreakTime > 15) {
      formErrors.push('Digite valores entre 1 e 15 para descanso curto.');
    }

    if (longBreakTime < 1 || longBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso longo.');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionsTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.success('Configuração salva com sucesso.');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formControl'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formControl'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Decanso curto'
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formControl'>
            <DefaultInput
              id='longBreakTime'
              labelText='Decanso longo'
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formControl'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configuração'
              title='Salvar configuração'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
