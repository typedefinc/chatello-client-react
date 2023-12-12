import LoginForm from "@/modules/auth/components/login/LoginForm.tsx";
import styles from "./Login.module.scss";
import { FC } from "react";
import InlineButton from "@/shared/ui/inline-button/InlineButton.tsx";
import { Link } from "react-router-dom";

const Login: FC = () => {
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

      <LoginForm />

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
  )
}

export default Login;
