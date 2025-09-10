import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

export function History() {
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Historico</span>
          <span>
            <DefaultButton icon={<TrashIcon />} />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className='responsiveTable'></div>
      </Container>
    </MainTemplate>
  );
}
