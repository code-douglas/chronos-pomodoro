import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action='' className='form'>
          <div className='formControl'>
            <DefaultInput
              type='text'
              id='meuInput'
              labelText='Task:'
              placeholder='O que deseja fazer?'
            />
          </div>
          <div className='formControl'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formControl'>
            <p>Ciclos:</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          <div className='formControl'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export { App };
