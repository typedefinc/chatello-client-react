import {
  addNotification,
  NotificationType,
  NotificationTypeEnum
} from "@/modules/notifications/store/notificationSlice.ts";
import { useTypedDispatch, useTypedSelector } from "@/shared/store";

type NotificationHook = [
  notifications: NotificationType[],
  pushNotification: (type: NotificationTypeEnum, message: string) => void,
]

export default function useNotification(): NotificationHook {
  const dispatch = useTypedDispatch();
  const { notifications } = useTypedSelector(state => state.notification);

  const pushNotification = (type: NotificationTypeEnum, message: string) => {
    dispatch(addNotification({
      type: type,
      message: message,
    }));
  };

  return [
    notifications,
    pushNotification,
  ];
}
