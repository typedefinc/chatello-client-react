import { FC, memo, ReactNode, useEffect } from "react";
import { NotificationType, removeNotification } from "@/modules/notifications/store/notificationSlice.ts";
import styles from "./NotificationItem.module.scss";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import { useTypedDispatch } from "@/shared/store";

type Props = {
  data: NotificationType,
}

const NotificationItem: FC<Props> = memo(({ data }): ReactNode => {
  const dispatch = useTypedDispatch();

  const typeStyles = () => {
    switch (data.type) {
      case "error":
        return styles.error;
      case "warning":
        return styles.warning;
      case "info":
        return styles.info;
      case "success":
        return styles.success;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(removeNotification(data.id));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, data.id]);

  return (
    <div
      className={`${styles.notification} ${typeStyles()}`}
    >
      { data.type === "error" && <XCircleIcon className="w-6 stroke-red-600" />}
      { data.type === "warning" && <ExclamationTriangleIcon className="w-6 stroke-orange-600" />}
      { data.type === "info" && <ExclamationCircleIcon className="w-6 stroke-blue-600" />}
      { data.type === "success" && <CheckCircleIcon className="w-6 stroke-green-600" />}

      <div className={styles.text}>{ data.message }</div>
    </div>
  );
});

export default NotificationItem;
