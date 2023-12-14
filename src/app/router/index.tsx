import LoginPage from "@/modules/auth/view/login/LoginPage.tsx";
import ChatList from "@/modules/chat-list/view/ChatList.tsx";
import RequireAuth from "@/shared/wrapper/RequireAuth.tsx";
import SignUpPage from "@/modules/auth/view/sign-up/SignUpPage.tsx";
import ForgotPasswordPage from "@/modules/auth/view/forgot-password/ForgotPasswordPage.tsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <ChatList />
      </RequireAuth>
      ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  }
]);

export default router;
