import '@/app/App.scss'
import index from '@/app/router';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

const App: FC = () => {
  return (
    <RouterProvider router={index} />
  )
}

export default App;
