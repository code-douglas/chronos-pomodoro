import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { DefaultForm } from '../../components/DefaultForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <DefaultForm />
      </Container>
    </MainTemplate>
  );
}
