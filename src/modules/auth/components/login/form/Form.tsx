import { FC, useEffect, useState } from "react";
import Input from "@/shared/ui/input/Input.tsx";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Button from "@/shared/ui/button/Button.tsx";
import styles from './Form.module.scss';
import { useLoginMutation } from "@/modules/auth/api";
import { NotificationTypeEnum } from "@/modules/notifications/store/notificationSlice.ts";
import { isFetchBaseQueryError } from "@/shared/helpers";
import useNotification from "@/hooks/useNotification.ts";
import useAuth from "@/hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: '',
  password: '',
};

const Form: FC = () => {
  const navigate = useNavigate();
  const [, pushNotification] = useNotification();
  const { setTokens } = useAuth();

  const [formData, setFormData] = useState(initialState);
  const [loginHandler, { data, isLoading, isError, error, isSuccess }] = useLoginMutation();

  const clickHandler = async () => {
    await loginHandler({
      email: formData.email,
      password: formData.password,
    });
  };

  useEffect(() => {
    if (isError) {
      const message = isFetchBaseQueryError(error) ? error.data.message : '';

      pushNotification(NotificationTypeEnum.ERROR, message);
    }

    if (isSuccess && data) {
      setTokens(data);

      pushNotification(NotificationTypeEnum.SUCCESS, 'Authorization was successful');
      navigate('/');
    }
  }, [isSuccess, isError]);

  return (
    <div className={ styles.inputs }>
      <Input
        type="text"
        placeholder="Email"
        name="login"
        value={ formData.email }
        onChange={ (event) => setFormData({...formData, email: event.target.value}) }
      >
        <UserIcon className="w-6 stroke-gray-400"/>
      </Input>

      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={ formData.password }
        onChange={ (event) => setFormData({...formData, password: event.target.value}) }
      >
        <LockClosedIcon className="w-6 stroke-gray-400"/>
      </Input>

      <Button
        text="Login"
        isLoading={isLoading}
        onClick={() => clickHandler()}
      />
    </div>
  );
};

export default Form;
