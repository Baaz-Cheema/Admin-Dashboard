import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from "./pages/Root";
import MainPage from './pages/MainPage';
import './App.css'


const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: 'main', element: <MainPage /> }
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
