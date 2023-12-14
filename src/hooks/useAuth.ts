import { useTypedDispatch, useTypedSelector } from "@/shared/store";
import { TokensDtoType } from "@/modules/auth/api";
import { setTokens as setTokenReducer, removeTokens as removeTokensReducer } from "@/modules/auth/store/authSlice.ts";
import { useCookies } from "react-cookie";

export default function useAuth() {
  const dispatch = useTypedDispatch();
  const { accessToken, refreshToken } = useTypedSelector(state => state.auth);
  const [, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

  const setTokens = (tokens: TokensDtoType) => {
    dispatch(setTokenReducer(tokens));
    setCookie('accessToken', tokens.accessToken);
    setCookie('refreshToken', tokens.refreshToken);
  };

  const removeTokens = () => {
    dispatch(removeTokensReducer());
    removeCookie('accessToken');
    removeCookie('refreshToken');
  };

  return {
    accessToken,
    refreshToken,
    isAuth: !!accessToken,
    setTokens,
    removeTokens,
  };
}
