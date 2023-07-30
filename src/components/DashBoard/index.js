import {Component} from 'react'

import LeftSidebar from '../LeftSidebar'
import AddTransactions from '../AddTransactions'
import CreditSection from '../CreditSection'
import DebitSection from '../DebitSection'
import Last3TransactionSection from '../Last3TransactionSection'

import './index.css'

const tabsList = [
  {tabName: 'Dashboard', tabId: 'DASHBOARD'},
  {tabName: 'Transaction', tabId: 'TRANSACTION'},
  {tabName: 'Profile', tabId: 'PROFILE'},
]

class DashBoard extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  changeDashboard = () => {
    this.setState({activeTabId: tabsList[0].tabId})
    console.log('Dashboard is clicked')
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
      <div className="dashboard-container">
        <LeftSidebar
          changeDashboard={this.changeDashboard}
          onClickTransaction={this.onClickTransaction}
          onClickProfile={this.onClickProfile}
          activeTabId={activeTabId}
          tabsList={tabsList}
        />
        <div className="body">
          <AddTransactions />
          <div className="credit-debit-container">
            <CreditSection />
            <DebitSection />
          </div>

          <div className="Last3TransactionSection-container ">
            <Last3TransactionSection />
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard
