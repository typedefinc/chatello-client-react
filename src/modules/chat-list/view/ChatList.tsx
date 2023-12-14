import { FC, ReactNode } from "react";
import style from "./ChatList.module.scss";
import useAuth from "@/hooks/useAuth.ts";

const ChatList: FC = (): ReactNode => {
  const { removeTokens } = useAuth();

  return (
    <div className={style.wrapper}>
      {/*<MessageList />*/}

      <button onClick={() => removeTokens()}>
        EXIT
      </button>
    </div>
  );
};

export default ChatList;
