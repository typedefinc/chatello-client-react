import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

export enum NotificationTypeEnum {
  ERROR ='error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

export type NotificationType = {
  id: string,
  type: NotificationTypeEnum,
  message?: string,
}

type NotificationCreateDto = Omit<NotificationType, 'id'>;

type NotificationSliceType = {
  notifications: NotificationType[],
}

const getInitialState = (): NotificationSliceType => ({
  notifications: [],
});

const notificationSlice = createSlice({
  name: 'notification',
  initialState: getInitialState(),
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationCreateDto>) => {
      state.notifications.push({
        id: v4(),
        ...action.payload,
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
