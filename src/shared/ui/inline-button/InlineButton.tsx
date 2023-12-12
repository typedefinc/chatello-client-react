import { FC, PropsWithChildren, ReactNode } from "react";
import styles from './InlineButton.module.scss';

type Props = {
  style?: 'normal' | 'bold',
}

const InlineButton: FC<PropsWithChildren<Props>> = ({ children, style }): ReactNode => {
  return (
    <button
      className={`${styles.inline_btn} ${style === 'bold' ? styles.bold : ''}`}
    >
      { children }
    </button>
  )
}

export default InlineButton;
