import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import theme from 'theme'
import router from 'router'
import WebApp from '@twa-dev/sdk'
import { STORAGE_KEY } from './utils/cacheManage.ts'
import 'styles/index.scss'

WebApp.ready()
WebApp.expand()
WebApp.enableClosingConfirmation()
WebApp.disableVerticalSwipes()
WebApp.setHeaderColor('#121212')

if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
  const userInfo = WebApp.initDataUnsafe.user
  const id = userInfo.id.toString()
  localStorage.setItem(STORAGE_KEY.USER_ID, id)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
