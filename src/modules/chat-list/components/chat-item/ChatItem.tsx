import { FC } from "react";
import styled from "./ChatItem.module.scss";
import { ChatItemType } from "../ChatList.tsx";
import { UserIcon } from "@heroicons/react/24/outline";

type Props = {
  data: ChatItemType,
}

const ChatItem: FC<Props> = ({ data }) => {
  const { name } = data;

  return (
    <div className={styled.item}>
      <div className={styled.avatar}>
        <UserIcon className="w-6 h-6" />
      </div>

      <div>
        {name}
      </div>
    </div>
  )
}

export default ChatItem;
