import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from "./pages/Root";
import MainPage from './pages/MainPage';
import './App.css'
import Market from './pages/Market';
import CoinDetail from './pages/CoinDetail';
import News from './pages/News';



const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: 'main', element: <MainPage /> },
      {
        path: '/market', element: <Market />
      },
      { path: '/market/:coin', element: <CoinDetail /> },
      { path: '/news', element: <News /> }
    ]
  }
]
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
