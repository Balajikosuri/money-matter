import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import SidebarTabs from '../SidebarTabs'

import LoggedUser from '../LoggedUser'

import './index.css'

const Sidebar = props => {
  const clickOnLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="sidebar">
      <div className="app-header">
        <img
          className="app-logo"
          src="img/money-matter-app-logo.png"
          alt="app-logo"
        />
        <h1 className="money app-heading">
          Money <span className="Matters app-heading ">Matters</span>
        </h1>
      </div>
      <SidebarTabs />
      <div className="LoggedUser-container-large-devices">
        <LoggedUser clickOnLogout={clickOnLogout} />
      </div>
    </div>
  )
}

export default withRouter(Sidebar)
