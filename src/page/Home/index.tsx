import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { DefaultForm } from '../../components/DefaultForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
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
