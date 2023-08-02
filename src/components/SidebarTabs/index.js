import {Component} from 'react'
import './index.css'

import TabItem from '../TabItem'

const tabsList = [
  {
    tabName: 'Dashboard',
    tabId: 'DASHBOARD',
    tabIcon: 'img/home-icon.png',
    activeTabIcon: 'img/active-home-icon.png',
  },
  {
    tabName: 'Transaction',
    tabId: 'TRANSACTION',
    tabIcon: 'img/transactions-icon.png',
    activeTabIcon: 'img/active-transactions-icon.png',
  },
  {
    tabName: 'Profile',
    tabId: 'PROFILE',
    tabIcon: 'img/profile-icon.png',
    activeTabIcon: 'img/active-profile-icon.png',
  },
]

class SidebarTabs extends Component {
  state = {activeTabId: 'DASHBOARD'}

  onClickTab = tabId => this.setState({activeTabId: tabId})

  render() {
    const {activeTabId} = this.state
    return (
      <ul className="tabs-container">
        {tabsList.map(eachTab => (
          <TabItem
            key={eachTab.tabId}
            TabItemData={eachTab}
            isActiveTab={eachTab.tabId === activeTabId}
            onClickTab={this.onClickTab}
          />
        ))}
      </ul>
    )
  }
}

export default SidebarTabs
