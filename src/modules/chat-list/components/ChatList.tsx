import { FC } from "react";
import styled from "./ChatList.module.scss";
import ChatItem from "./chat-item/ChatItem.tsx";

export type ChatItemType = {
  id: string,
  name: string,
  lastMessage?: string,
};

const MessageList: FC = () => {
  const chatList: ChatItemType[] = [
    {
      id: '1',
      name: 'Иванов Иван',
      lastMessage: 'Пока',
    },
    {
      id: '2',
      name: 'Иванов Иван',
    },
    {
      id: '3',
      name: 'Иванов Иван',
    }
  ]

  return (
    <div className={styled.messages}>
      {chatList.length && chatList.map((item) => (
        <ChatItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default MessageList;
