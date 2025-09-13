import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
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
        <form action='' className='form'>
          <div className='formControl'>
            <DefaultInput id='workTime' labelText='Foco' />
          </div>
          <div className='formControl'>
            <DefaultInput id='shortBreakTime' labelText='Decanso curto' />
          </div>
          <div className='formControl'>
            <DefaultInput id='longBreakTime' labelText='Decanso longo' />
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
