import styles from './Button.module.scss';
import { FC, MouseEventHandler, ReactNode } from "react";
import Loader from "@/shared/ui/loader/Loader.tsx";

type Props = {
  type?: 'button' | 'submit',
  text: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  isLoading: boolean,
}

const Button: FC<Props> = ({ type, text, onClick, isLoading }): ReactNode => {
  return (
    <button
      type={type || 'button'}
      className={styles.btn}
      disabled={isLoading}
      onClick={onClick}
    >
      { isLoading ? <Loader /> : text }
    </button>
  );
};

export default Button;
