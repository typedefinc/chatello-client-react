import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import { store } from "@/shared/store";
import { Provider } from "react-redux";
import Notification from "@/modules/notifications/components/Notification.tsx";

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Notification />
    </Provider>
  </React.StrictMode>,
);
