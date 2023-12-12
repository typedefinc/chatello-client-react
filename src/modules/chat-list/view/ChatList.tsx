import MessageList from "@/modules/chat-list/components/ChatList.tsx";
import { FC, ReactNode } from "react";
import style from "./ChatList.module.scss";

const ChatList: FC = (): ReactNode => {
  return (
    <div className={style.wrapper}>
      <MessageList />
    </div>
  );
}

export default ChatList;
