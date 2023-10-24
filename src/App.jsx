import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './component/layout/AppLayout'
import Home from './component/page/Home'
import Product from './component/page/Product'
import Card from './component/page/Card'
import ErrorPage from './component/page/ErrorPage'

function App() {

const RouterList = createBrowserRouter([
  {
    element : <AppLayout />,
    children : [
      {
        path    : '/',
        element : <Home />
      },
      {
        path    : '/product',
        element : <Product />
      },
      {
        path    : '/cart',
        element : <Card /> 
      },
      {
        path    : '/*',
        element : <ErrorPage />
      }
    ]
  }
])
  return (
    <>
      <RouterProvider router={RouterList}/>
    </>
  )
}

export default App
