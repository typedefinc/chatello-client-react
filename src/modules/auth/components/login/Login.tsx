import { FC } from "react";
import styles from './Login.module.scss';
import InlineButton from "@/shared/ui/inline-button/InlineButton.tsx";
import Form from "@/modules/auth/components/login/form/Form.tsx";

const Login: FC = () => {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.form }>
        <Form />

        <InlineButton>
          Forgot password?
        </InlineButton>
      </div>
    </div>
  );
};

export default Login;
