import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from "./pages/Root";
import MainPage from './pages/MainPage';
import './App.css'
import Market from './pages/Market';
import CoinDetail from './pages/CoinDetail';
import News from './pages/News';
import Portfolio from './pages/Portfolio';


const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { index: true, element: <MainPage /> },
      {
        path: '/market', element: <Market />
      },
      { path: '/market/:coin', element: <CoinDetail /> },
      { path: '/news', element: <News /> },
      { path: '/portfolio', element: <Portfolio /> }
    ]
  }
]
)
const img = new Image(); //for image preloading. 
img.src = ''

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
