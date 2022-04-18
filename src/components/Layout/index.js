import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
      <span className="tags top-tags1">&lt;&gt;</span>
        <span className="tags top-tags">&lt;div&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/div&gt;
          <br />
          <span className="bottom-tag-html">&lt;/&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
