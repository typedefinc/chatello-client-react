import styles from "./LoginPage.module.scss";
import { FC, useEffect } from "react";
import InlineButton from "@/shared/ui/inline-button/InlineButton.tsx";
import { Link, useNavigate } from "react-router-dom";
import Login from "@/modules/auth/components/login/Login.tsx";
import useAuth from "@/hooks/useAuth.ts";
import useNotification from "@/hooks/useNotification.ts";
import { NotificationTypeEnum } from "@/modules/notifications/store/notificationSlice.ts";

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [, pushNotification] = useNotification();
  const { isAuth } = useAuth();


  useEffect(() => {
    if (isAuth) {
      pushNotification(NotificationTypeEnum.INFO, 'You are already logged in.');
      navigate('/');
    }
  }, []);

  return (
    <div className={ styles.wrapper }>
      <div
        className={ styles.logo }
      >
        <img
          src="/images/sammy-line-woman-chatting-online.png"
          alt="auth-logo"
        />
      </div>

      <div className={ styles.header }>
        <h1 className={ styles.title }>
          Login
        </h1>
        <h3 className={ styles.description }>
          Please sign in to continue.
        </h3>
      </div>

      <Login />

      <div className={ styles.signup_link }>
        <span className={ styles.description }>
          Don't have an account?
        </span>


        <InlineButton style="bold">
          <Link to='/sign-up'>
            Sign Up
          </Link>
        </InlineButton>
      </div>
    </div>
  );
};

export default LoginPage;
