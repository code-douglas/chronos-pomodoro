import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <div>
      <Heading>
        Olá
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </div>
  );
}

export { App };
