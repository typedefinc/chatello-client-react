import { FC, useState } from "react";
import styles from './LoginForm.module.scss';
import Input from "@/shared/ui/input/Input.tsx";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Button from "@/shared/ui/button/Button.tsx";
import InlineButton from "@/shared/ui/inline-button/InlineButton.tsx";
import { LoginDto, useLoginMutation } from "@/modules/auth/api";

const initialState: LoginDto = {
  email: '',
  password: '',
}

const LoginForm: FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [login] = useLoginMutation();

  const loginHandler = async () => {
    if (formData.email && formData.password) {
      await login(formData);
    }
  }

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.form }>
        <div className={ styles.inputs }>
          <Input
            type="text"
            placeholder="Email"
            name="login"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          >
            <UserIcon className="w-6 stroke-gray-400"/>
          </Input>

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(event) => setFormData({ ...formData, password: event.target.value })}
          >
            <LockClosedIcon className="w-6 stroke-gray-400"/>
          </Input>
        </div>

        <Button
          text="Login"
          onClick={() => loginHandler() }
        />

        <InlineButton>
          Forgot password?
        </InlineButton>
      </div>
    </div>
  )
}

export default LoginForm;
