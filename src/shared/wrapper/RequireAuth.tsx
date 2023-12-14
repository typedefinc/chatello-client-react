import { Navigate } from "react-router-dom";
import { FC, PropsWithChildren, ReactNode } from "react";
import useAuth from "@/hooks/useAuth.ts";

const RequireAuth: FC<PropsWithChildren> = ({ children }): ReactNode => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
