import { FC, ReactNode } from "react";
import styles from './Loader.module.scss';

const Loader: FC = (): ReactNode => {
  return (
    <div className={styles.loader}></div>
  );
};

export default Loader;
