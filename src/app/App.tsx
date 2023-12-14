import '@/app/App.scss';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from "@/app/router";
import { useCookies } from "react-cookie";
import { useTypedDispatch } from "@/shared/store";
import { setTokens } from "@/modules/auth/store/authSlice.ts";

const App: FC = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const dispatch = useTypedDispatch();

  dispatch(setTokens({
    accessToken: cookies.accessToken,
    refreshToken: cookies.refreshToken,
  }));

  return (
    <RouterProvider router={router} />
  );
};

export default App;
