import './index.css'

const TabItem = props => {
  const {TabItemData, isActiveTab, onClickTab} = props
  const {tabIcon, activeTabIcon, tabName, tabId} = TabItemData

  const ActiveTabImg = isActiveTab ? activeTabIcon : tabIcon

  const ActiveTabClassName = isActiveTab && 'active-tab'

  const ActiveTextColorClassName = isActiveTab && 'active-text-color'

  return (
    <li className={`tab-item ${ActiveTabClassName}`}>
      <button
        onClick={() => {
          onClickTab(tabId)
        }}
        type="button"
        className="option-item "
      >
        <img className="option-item-icon" alt="tab" src={ActiveTabImg} />
        <p className={`option-item-name ${ActiveTextColorClassName}`}>
          {tabName}
        </p>
      </button>
    </li>
  )
}

export default TabItem
