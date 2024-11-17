import { Outlet } from 'react-router-dom'
import Tabbar from 'components/Tabbar.tsx'

/**
 * 首页
 * @constructor
 */
const IndexPage = () => {
  return (
    <>
      <Outlet />
      <Tabbar />
    </>
  )
}

export default IndexPage
