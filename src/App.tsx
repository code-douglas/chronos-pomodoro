import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';
import { PlayCircleIcon } from 'lucide-react';

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
            <Cycles />
          </div>
          <div className='formControl'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export { App };
