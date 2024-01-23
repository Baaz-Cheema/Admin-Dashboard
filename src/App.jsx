import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from "./pages/Root";
import MainPage from './pages/MainPage';
import './App.css'
import Market from './pages/market';
import CoinDetail from './pages/CoinDetail';



const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: 'main', element: <MainPage /> },
      { path: '/market', element: <Market /> },
      { path: '/coin-detail', element: <CoinDetail /> }
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
