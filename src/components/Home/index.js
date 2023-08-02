import {Component} from 'react'

import Sidebar from '../Sidebar'
import AddTransactionsHeader from '../AddTransactionsHeader'
import CreditSection from '../CreditSection'
import DebitSection from '../DebitSection'
import Last3TransactionSection from '../Last3TransactionSection'

import './index.css'

import LoggedUser from '../LoggedUser'

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

class DashBoard extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  changeDashboard = () => {
    this.setState({activeTabId: tabsList[0].tabId})
  }

  onClickTransaction = () => {
    this.setState({activeTabId: tabsList[1].tabId})
  }

  onClickProfile = () => {
    this.setState({activeTabId: tabsList[2].tabId})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="Home-container">
        <div>
          <Sidebar
            changeDashboard={this.changeDashboard}
            onClickTransaction={this.onClickTransaction}
            onClickProfile={this.onClickProfile}
            activeTabId={activeTabId}
            tabsList={tabsList}
          />
        </div>
        <div className="body">
          <AddTransactionsHeader />
          <div className="credit-debit-container">
            <CreditSection />
            <DebitSection />
          </div>

          <div className="Last3TransactionSection-container ">
            <Last3TransactionSection />
          </div>

          <div className="LoggedUser-container-small-devices">
            <hr className="h-line" />
            <LoggedUser />
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard
