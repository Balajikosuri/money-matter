import {withRouter} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegMoneyBillAlt} from 'react-icons/fa'

import {CgProfile} from 'react-icons/cg'

import './index.css'

const LeftSidebar = props => {
  const {
    activeTabId,
    changeDashboard,
    onClickTransaction,
    onClickProfile,
    tabsList,
  } = props

  const onChangeDashboard = () => changeDashboard()

  //   const isActiveTab = activeTabId === ''

  const activeTabClassName = 'active-tab'

  return (
    <div className="left-sidebar">
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
      <ul className="tabs-container">
        <li className="tab-item">
          <button
            onClick={onChangeDashboard}
            className={`tab-item tab-btn ${
              activeTabId === tabsList[0].tabId && activeTabClassName
            }`}
            type="button"
          >
            <AiOutlineHome size={18} className="icon" />
            Dashboard
          </button>
        </li>
        <li className="tab-item">
          <button
            onClick={() => onClickTransaction()}
            className={`tab-btn ${
              activeTabId === tabsList[1].tabId && activeTabClassName
            }`}
            type="button"
          >
            <FaRegMoneyBillAlt size={18} className="icon" />
            Transaction
          </button>
        </li>
        <li className="tab-item">
          <button
            onClick={() => onClickProfile()}
            className={`tab-btn ${
              activeTabId === tabsList[2].tabId && activeTabClassName
            }`}
            type="button"
          >
            <CgProfile size={18} className="icon" />
            Profile
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(LeftSidebar)
