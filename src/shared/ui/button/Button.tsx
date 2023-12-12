import styles from './Button.module.scss';
import { FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  type?: 'button' | 'submit',
  text: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

const Button: FC<Props> = ({ type, text, onClick }): ReactNode => {
  return (
    <button
      type={type || 'button'}
      className={styles.btn}
      onClick={onClick}
    >
      { text }
    </button>
  )
}

export default Button;
