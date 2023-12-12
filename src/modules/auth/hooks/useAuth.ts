import { useState } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  }

  return {
    isAuth,
    login,
  }
}
