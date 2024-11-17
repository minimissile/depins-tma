import { createBrowserRouter } from 'react-router-dom'
import App from 'App'
import ErrorPage from 'views/ErrorPage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import IndexPage from 'views'
import TweetPage from 'views/tweet/TweetPage'
import PushPage from 'views/PushPage'
import SquarePage from 'views/square/SquarePage.tsx'

/**
 * 路由重定向
 * @constructor
 */
const RedirectComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/tweet')
  }, [navigate])

  return null
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RedirectComponent />,
      },
      {
        path: '/',
        element: <IndexPage />,
        children: [
          {
            index: true,
            path: 'tweet',
            element: <TweetPage />,
          },
          {
            path: 'push',
            element: <PushPage />,
          },
          {
            path: 'square',
            element: <SquarePage />,
          },
        ],
      },
    ],
  },
])

export default router
