import styles from './Input.module.scss';
import { ChangeEventHandler, FC, PropsWithChildren, ReactNode } from "react";

type Props = {
  type: 'text' | 'password' | 'number',
  label?: string,
  placeholder: string,
  name: string,
  value: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

const Input: FC<PropsWithChildren<Props>> = ({ type, label, placeholder, children, name, value, onChange }): ReactNode => {
  return (
    <label className={styles.wrapper}>
      { label && <span>{ label }</span> }

      <div className={styles.icon}>
        { children }
      </div>

      <input
        type={type}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Input;
