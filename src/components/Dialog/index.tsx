import type { ToastContentProps } from 'react-toastify';
import { DefaultButton } from '../DefaultButton';
import { BanIcon, CheckIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<CheckIcon />}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<BanIcon />}
            color='red'
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
          />
        </div>
      </div>
    </>
  );
}
