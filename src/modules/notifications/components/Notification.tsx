import { FC, ReactNode } from "react";
import styles from './Notification.module.scss';
import { useTypedSelector } from "@/shared/store";
import NotificationItem from "@/modules/notifications/components/item/NotificationItem.tsx";

const Notification: FC = (): ReactNode => {
  const { notifications } = useTypedSelector(state => state.notification);

  return (
    <div className={styles.notifications}>
      { notifications.map((notification) =>
        <NotificationItem
          key={notification.id}
          data={notification}
        />
      )}
    </div>
  );
};

export default Notification;
